<template>
  <div>
    <!-- Header -->
    <header class="fixed w-full top-0 text-center py-4 bg-white shadow">
      <h1 class="text-lg font-semibold text-gray-800">Тафтиши вазъи ҳуқуқӣ</h1>
    </header>

    <div class="p-4 pt-24 space-y-6 bg-white">


        <div class="flex flex-col space-y-5 justify-center items-center">
            <div class="flex space-x-8">
                <PieChart class="h-40 w-40"/>
                <div>
                    <div class="space-y-4">
                        <div class="flex items-center justify-between space-x-10">
                            <div class="text-secondary">ҳолати умумӣ</div>
                            <div class="font-semibold">хавфнок</div>
                        </div>
                        <div class="flex items-center justify-between space-x-10">
                            <div class="text-secondary">тафтиши охирин</div>
                            <div class="font-semibold">16 Май 2025</div>
                        </div>
                    </div>
                </div>
            </div>

            <h3 class="font-semibold text-2xl text-start ">72.4 %</h3>


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


    <div class="mt-4 p-4 py-6 space-y-3 bg-white">
        <div class="flex border justify-between items-center rounded p-4">
            <div class="flex space-x-2 items-center">
                <div class="text-3xl">🧾</div>
                <div class="text-lg">Андоз</div>
            </div>
            <div class="rounded-full p-1 px-[10px] text-sm bg-red-400 text-white font-semibold">2</div>
        </div>
        <div class="flex border justify-between items-center rounded p-4">
            <div class="flex space-x-2 items-center">
                <div class="text-3xl">🏠</div>
                <div class="text-lg">Амволи ғайриманқул</div>
            </div>
            <div class="rounded-full p-1 px-[10px] text-sm bg-red-400 text-white font-semibold">1</div>
        </div>
        <div class="flex border justify-between items-center rounded p-4">
            <div class="flex space-x-2 items-center">
                <div class="text-3xl">💼</div>
                <div class="text-lg">Соҳибкорӣ</div>
            </div>
            <div class="rounded-full p-1 px-[10px] text-sm bg-red-400 text-white font-semibold">3</div>
        </div>
    </div>
    
    



  </div>
</template>

<script>

import PieChart from '../components/PieChart.vue'

export default {
  name: "Health",
  components: {PieChart}
};
</script>
