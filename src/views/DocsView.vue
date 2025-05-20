<template>
  <div>
    <!-- Header -->
    <header class="fixed w-full top-0 text-center py-4 bg-white shadow">
      <h1 class="text-lg font-semibold text-gray-800">Ҳуҷҷатгузорӣ</h1>
    </header>

    <div class="min-h-screen bg-gray-100 flex flex-col space-y-6 p-4 pt-24">


        <router-link to="/docs/check">

          <div class="flex shadow bg-white flex-col items-center justify-center rounded-xl space-y-6 border-mine2-bold p-10">
              <img src="../assets/scan.svg" alt="">
              <h3 class="font-bold">Дуруст ва расмӣ будани ҳуҷҷатро тафтиш кунед</h3>
          </div>

        </router-link>


        <router-link to="/docs/patterns">

          <div class="flex shadow bg-white flex-col items-center justify-center rounded-xl space-y-6 border-mine2-bold p-10">
            <img src="../assets/mold.svg" alt="">
            <h3 class="font-bold">Омода кардани ҳуҷҷат аз руи намуна ва қолаб</h3>
          </div>

        </router-link>

        

    </div>

    
    



  </div>
</template>

<script>
export default {
  name: "Docs",
};
</script>
