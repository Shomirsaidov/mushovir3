<template>
  <div>
    <!-- Header -->
    <header class="fixed w-full top-0 text-center py-4 bg-white shadow">
      <h1 class="text-lg font-semibold text-gray-800">Натиҷаи тафитиши ҳуҷҷат</h1>
    </header>

    <div class="p-4 pt-24 space-y-6 bg-white">


        <div v-if="checkFinished" class="flex flex-col space-y-5 justify-center items-center">
            <div class="flex flex-col justify-center items-center space-y-6">

                <PieChart class="h-40 w-40" :proportions="[this.$store.state.checkResults.score, 100 - this.$store.state.checkResults.score]"/>

                <h3 class="font-semibold text-2xl text-start ">{{ this.$store.state.checkResults.score }} %</h3>

                <div class="space-y-4">
                    <div class="space-y-5">
                        <div class="font-semibold text-xl mt-4">Ҷойҳои шубҳанок</div>
                        <div class="font-semibold border p-3 text-start">{{ this.$store.state.checkResults.suspicion }}</div>
                    </div>
                </div>
            </div>



            <div @click="() => this.$router.back()" class="border-mine2 rounded-lg w-full p-3 font-semibold text-lg">
                Бозгашт
            </div>

            


            
        </div>
        <div class="flex justify-center py-10" v-if="!checkFinished">
            <img src="../assets/logo-elem.svg" class="loader" width="50" alt="">
        </div>

        

    </div>


    
    
    



  </div>
</template>

<script>

import PieChart from '../components/PieChart.vue'

export default {
  name: "CheckResults",
  components: {PieChart},
  data: () => ({
    checkFinished: false
  }),
  computed: {
    finalPrompt() {
        return `the documents title is  ${this.$store.state.docData.title}. based on the text i will provide assesы its legitimacy and transparency and give feedback. here is the content of this document. use only tajik language in the response. the reponse must be a json object containing two fields. 1) score: just the number between 1 - 100 2) suspicion : just in one short paragprah explaining whats suspicious , or say it is ok if it ts. even if the error apears in the provided text keep the structure and return just json with no comments : ${this.$store.state.docData.desc}`
    }
  },
  async mounted() {

    

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
            this.$store.state.checkResults = parsedObject;
            this.checkFinished = true

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
