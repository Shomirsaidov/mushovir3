<template>
  <div>
    <!-- Header -->
    <header class=" w-full text-center py-4 bg-white shadow">
      <h1 class="text-lg font-semibold text-gray-800">Тафтиши вазъи ҳуқуқӣ</h1>
    </header>

    <div class="flex justify-center py-10" v-if="!aiLoaded">
        <img src="../assets/logo-elem.svg" class="loader" width="50" alt="">
    </div>

    <div class="p-4 pt-5 mt-1 space-y-6 bg-white" v-if="aiLoaded">  


        <div class="flex flex-col space-y-5 justify-center items-center">
            <div class="flex items-center space-x-6">
                <PieChart class="h-40 w-40" :proportions="[this.$store.state.legalHealth.score, 100 - this.$store.state.legalHealth.score]"/>
                <div>
                    <div class="space-y-4">
                        <div class="flex items-center justify-between space-x-10">
                            <div class="text-secondary">ҳолати умумӣ</div>
                            <div class="font-semibold">хавфнок</div>
                        </div>
                        <div class="flex items-center justify-between space-x-10">
                            <div class="text-secondary">тафтиши охирин</div>
                            <div class="font-semibold">20 Май 2025</div>
                        </div>
                    </div>
                </div>
            </div>

            <h3 class="font-semibold text-2xl text-start ">{{ this.$store.state.legalHealth.score }} %</h3>


            <div class="flex space-x-10">
                <button class="rounded-lg p-6 bg-gradient">
                    <img src="../assets/reload.svg" alt="">
                </button>
                <button class="rounded-lg p-6 bg-gradient">
                    <img src="../assets/add-doc.svg" alt="">
                </button>
            </div>
        </div>

        

    </div>


    <div class="mt-4 p-4 py-6 space-y-3 bg-white" v-if="aiLoaded">
        <h3 class="text-start font-semibold text-xl">Ҳуҷҷатҳои зерин намерасанд</h3>
        <div v-for="doc in this.$store.state.legalHealth.need_to_upload" class="flex border justify-between items-center space-x-2 rounded p-4">
            <div class="flex space-x-2 items-center">
                <img src="../assets/pen.svg" alt="">
                <div class="text-start">{{ doc }}</div>
            </div>
            <img src="../assets/upload.svg" alt="">
        </div>
        
    </div>


    <div class="mt-4 p-4 py-6 space-y-3 bg-white" v-if="aiLoaded">
        <h3 class="text-start font-semibold text-xl">Рискҳои потенсиалӣ</h3>
        <div v-for="risk in this.$store.state.legalHealth.risks" class="flex border items-center space-x-2 rounded p-4">
            <img src="../assets/warning.svg" alt="">
            <div class="text-start">{{ risk }}</div>
        </div>
        
    </div>


    <div class="mt-4 p-4 py-6 space-y-3 bg-white">
        <h3 class="text-start font-semibold text-xl">Ҳуҷҷатҳои ман</h3>
        <div v-for="doc in this.$store.state.docList" class="flex border justify-between items-center rounded p-4">
            <div class="flex space-x-2 items-center">
                <div class="text-3xl">🧾</div>
                <div class="text-lg">{{ doc }}</div>
            </div>
            <div class="rounded-full p-1 px-[10px] text-sm bg-red-400 text-white font-semibold">1</div>
        </div>
        
    </div>
    
    



  </div>
</template>

<script>

import PieChart from '../components/PieChart.vue'

export default {
  name: "Health",
  components: {PieChart},
  data: () => ({
    aiLoaded: false
  }),
  computed: {
    finalPrompt() {
        return `
                i have the following docunents now "${this.$store.state.docList}".
                Please assess its legitimacy , legal soundness and my legal state.
                Shortly Assess risks, what docs i still need to upload.
                Use only Tajik language in response.
                Return your analysis as JSON with no any additional comment: 
                {
                "score": [0 to 100],
                "risks": "Array of potential risks with existing docs",
                "need_to_upload": "Array of document titles i need to add to have full assesment"
                }
            `
    }
  },
  async mounted() {

    console.log(this.finalPrompt)
    

    try {
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.VUE_APP_OPENAI_KEY}`
          },
          body: JSON.stringify({
            model: "gpt-4o",
            messages: [
                { role: "user", content: this.finalPrompt }
            ],
          }),
        });

        const data = await res.json();
        const reply = data.choices[0].message.content.trim();


        const jsonString = reply.replace(/```json\s*|\s*```/g, '');

        let parsedObject;

        try {
            parsedObject = JSON.parse(jsonString);
            this.$store.state.legalHealth = parsedObject;
            this.aiLoaded = true

            console.log(parsedObject);
        } catch (error) {
            console.error('Invalid JSON:', error);
        }
        
        

        

        

      } catch (error) {

        this.$store.state.checkResults = {suspicion: "Илтимос дертар муроҷиат кунед. Мушкилие сар зад."}

        
        console.error("API Error:", error);
      }


  }
};
</script>
