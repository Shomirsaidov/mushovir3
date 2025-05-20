<template>
  <div>
    <header class="w-full text-center py-4 bg-white shadow">
      <h1 class="text-lg font-semibold text-gray-800">Хазинаи қонунҳо</h1>
    </header>

    <main class="mt-4 p-4">
      <div class="mb-10 flex bg-white items-center p-4 rounded-[23px] space-x-2 shadow shadow-white font-semibold">
        <input placeholder="саволи ҳуқуқӣ е қонуни ҶТ" type="text" class="flex-1 outline-none" />
        <img src="../assets/search-black.svg" alt="" />
      </div>

      <div class="space-y-4">
        <!-- Кодексҳо -->
        <div class="shadow bg-white rounded-[27px] p-6">
          <div class="flex justify-between items-center cursor-pointer" @click="toggleSection('kodeks')">
            <div class="flex items-center space-x-3">
              <img src="../assets/kodeks.svg" alt="">
              <div class="text-lg font-semibold">Кодексҳо</div>
            </div>
            <img :class="{ 'rotate-180': openSection === 'kodeks' }" src="../assets/angle-down.svg" alt="">
          </div>

          <div v-if="openSection === 'kodeks'" class="text-blue2 font-semibold text-lg text-start mt-5 mb-3 space-y-3">
            <a href="http://base.mmk.tj/view_sanadhoview.php?export=html&sanadID=23">Кодекси ҷиноятӣ</a>
            <div>Кодекси мурофивии ҷиноятӣ</div>
            <div>Кодекси шаҳрвандӣ</div>
            <div>Кодекси меҳнат</div>
            <div>Кодекси оила</div>
            <div>Кодекси замин</div>
            <div>Кодекси андоз</div>
            <div>Кодекси гумрук</div>
            <div>Кодекси об</div>
          </div>
        </div>

        <!-- Қонунҳо -->
        <div class="shadow bg-white rounded-[27px] p-6">
          <div class="flex justify-between items-center cursor-pointer" @click="toggleSection('qonun')">
            <div class="flex items-center space-x-3">
              <img src="../assets/qonun.svg" alt="">
              <div class="text-lg font-semibold">Қонунҳо</div>
            </div>
            <img :class="{ 'rotate-180': openSection === 'qonun' }" src="../assets/angle-down.svg" alt="">
          </div>

          <div v-if="openSection === 'qonun'" class="text-blue2 font-semibold text-lg text-start mt-5 mb-3 space-y-3">
            <div>Дар бораи судҳо</div>
            <a href="http://base.mmk.tj/view_sanadhoview.php?export=html&sanadID=620">Дар бораи авф</a>
            <div>Дар бораи Президент</div>
            <div>Дар бораи савдои электронӣ</div>
            <div>Дар бораи муҳоҷират</div>
          </div>
        </div>

        <!-- Фармону қарорҳо -->
        <div class="shadow bg-white rounded-[27px] p-6">
          <div class="flex justify-between items-center cursor-pointer" @click="toggleSection('farmon')">
            <div class="flex items-center space-x-3">
              <img src="../assets/pen.svg" alt="">
              <div class="text-lg font-semibold">Фармону қарорҳо</div>
            </div>
            <img :class="{ 'rotate-180': openSection === 'farmon' }" src="../assets/angle-down.svg" alt="">
          </div>
        </div>

        <!-- Низомнома ва тавсияҳо -->
        <div class="shadow bg-white rounded-[27px] p-6">
          <div class="flex justify-between items-center cursor-pointer" @click="toggleSection('nizom')">
            <div class="flex items-center space-x-3">
              <img src="../assets/rule.svg" alt="">
              <div class="text-lg font-semibold">Низомнома ва тавсияҳо</div>
            </div>
            <img :class="{ 'rotate-180': openSection === 'nizom' }" src="../assets/angle-down.svg" alt="">
          </div>
        </div>

        <!-- Санадҳои байналмиллалӣ -->
        <div class="shadow bg-white rounded-[27px] p-6">
          <div class="flex justify-between items-center cursor-pointer" @click="toggleSection('sanadho')">
            <div class="flex items-center space-x-3">
              <img src="../assets/globe.svg" alt="">
              <div class="text-lg font-semibold">Санадҳои байналмиллалӣ</div>
            </div>
            <img :class="{ 'rotate-180': openSection === 'sanadho' }" src="../assets/angle-down.svg" alt="">
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Navigate',
  data() {
    return {
      openSection: null // can be 'kodeks', 'qonun', 'farmon', etc.
    };
  },
  methods: {
    toggleSection(section) {
      this.openSection = this.openSection === section ? null : section;
    }
  }
};
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}

a {
  display: block;
}
</style>
