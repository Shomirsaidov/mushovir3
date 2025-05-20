<template>
  <div>
    <header class="w-full text-center py-4 bg-white shadow">
      <h1 class="text-lg font-semibold text-gray-800">Генератори ҳуҷҷатҳои ҳуқуқӣ</h1>
    </header>

    <main class="mt-4 p-4">
      <!-- Search -->
      <div class="mb-10 flex bg-white items-center p-4 rounded-[23px] space-x-2 shadow shadow-white font-semibold">
        <input placeholder="Навъи ҳуҷҷат ё шартнома" type="text" class="flex-1 outline-none" />
        <img src="../assets/search-black.svg" alt="" />
      </div>

      <div class="space-y-4">
        <!-- Шартномаҳо -->
        <div class="shadow bg-white rounded-[27px] p-6">
          <div class="flex justify-between items-center cursor-pointer" @click="toggleSection('shartnoma')">
            <div class="flex items-center space-x-3">
              <img src="../assets/qonun.svg" alt="">
              <div class="text-lg font-semibold">Шартномаҳо</div>
            </div>
            <img :class="{ 'rotate-180': openSection === 'shartnoma' }" src="../assets/angle-down.svg" alt="">
          </div>

          <div v-if="openSection === 'shartnoma'" class="text-blue2 font-semibold text-lg text-start mt-5 mb-3 space-y-3">
            <a href="https://docs.google.com/document/d/1jH0HDZL7grs81BkBP6UmwZdoUT_K1M-G8HsRWrlMwLs/edit?usp=sharing">Шартномаи иҷораи хона</a>
            <a href="https://docs.google.com/document/d/1Mv-l6WqpxAdivxbR8bZa0AjbHF9z-yOlO4AJUUTF0Gk/edit?usp=sharing">Шартномаи хариду фурӯши амвол</a>
            <a href="https://docs.google.com/document/d/16rPkiK1tFcCNUDQAWDYeS2o_2_FHTVldGMhs4cVSTUM/edit?usp=sharing">Шартномаи қарз</a>
            <div>Шартномаи хизмати ҳуқуқӣ</div>
            <div>Шартномаи таъмир ва сохтмон</div>
            <a href="https://docs.google.com/document/d/1LAlxQ4kEKbZT9H-ciTc2-UFayKA0VPw8ROuGB3lUnXI/edit?usp=sharing">Шартномаи ҳамкории тиҷоратӣ</a>
          </div>
        </div>

        <!-- Аризаҳо -->
        <div class="shadow bg-white rounded-[27px] p-6">
          <div class="flex justify-between items-center cursor-pointer" @click="toggleSection('ariza')">
            <div class="flex items-center space-x-3">
              <img src="../assets/qonun.svg" alt="">
              <div class="text-lg font-semibold">Аризаҳо</div>
            </div>
            <img :class="{ 'rotate-180': openSection === 'ariza' }" src="../assets/angle-down.svg" alt="">
          </div>

          <div v-if="openSection === 'ariza'" class="text-blue2 font-semibold text-lg text-start mt-5 mb-3 space-y-3">
            <a href="">Ариза ба суд</a>
            <a href="https://docs.google.com/document/d/15krGQfduhRoIjw87VFNgF1CC6vA4--IgBHEWnADiN4A/edit?usp=sharing">Ариза барои алимент</a>
            <a href="https://docs.google.com/document/d/19NqxvwWpxYJD3aECbuWaaR5hjSVNrwp8PIAWN90Un4k/edit?usp=sharing">Ариза барои бекор кардани никоҳ</a>
            <div>Ариза барои гирифтани маълумот</div>
            <div>Ариза ба прокуратура</div>
            <div>Ариза ба мақомоти андоз</div>
          </div>
        </div>

        <!-- Ваколатномаҳо -->
        <div class="shadow bg-white rounded-[27px] p-6">
          <div class="flex justify-between items-center cursor-pointer" @click="toggleSection('vakolat')">
            <div class="flex items-center space-x-3">
              <img src="../assets/qonun.svg" alt="">
              <div class="text-lg font-semibold">Ваколатномаҳо</div>
            </div>
            <img :class="{ 'rotate-180': openSection === 'vakolat' }" src="../assets/angle-down.svg" alt="">
          </div>

          <div v-if="openSection === 'vakolat'" class="text-blue2 font-semibold text-lg text-start mt-5 mb-3 space-y-3">
            <div>Ваколатномаи умумӣ</div>
            <div>Ваколатнома барои сафар бо кӯдак</div>
            <div>Ваколатнома барои намояндагӣ дар суд</div>
          </div>
        </div>

        <!-- Шартномаи меҳнатӣ -->
        <div class="shadow bg-white rounded-[27px] p-6">
          <div class="flex justify-between items-center cursor-pointer" @click="toggleSection('mehnat')">
            <div class="flex items-center space-x-3">
              <img src="../assets/qonun.svg" alt="">
              <div class="text-lg font-semibold">Шартнома ва аризаҳои меҳнатӣ</div>
            </div>
            <img :class="{ 'rotate-180': openSection === 'mehnat' }" src="../assets/angle-down.svg" alt="">
          </div>

          <div v-if="openSection === 'mehnat'" class="text-blue2 font-semibold text-lg text-start mt-5 mb-3 space-y-3">
            <div>Шартномаи меҳнатӣ</div>
            <div>Огоҳӣ оид ба қатъ намудани шартнома</div>
            <div>Ариза барои рухсатӣ</div>
          </div>
        </div>

        <!-- Санадҳо -->
        <div class="shadow bg-white rounded-[27px] p-6">
          <div class="flex justify-between items-center cursor-pointer" @click="toggleSection('sanad')">
            <div class="flex items-center space-x-3">
              <img src="../assets/qonun.svg" alt="">
              <div class="text-lg font-semibold">Санадҳо ва дигар ҳуҷҷатҳо</div>
            </div>
            <img :class="{ 'rotate-180': openSection === 'sanad' }" src="../assets/angle-down.svg" alt="">
          </div>

          <div v-if="openSection === 'sanad'" class="text-blue2 font-semibold text-lg text-start mt-5 mb-3 space-y-3">
            <div>Санади супоридани амвол</div>
            <div>Дархост барои бақайдгирии молу мулк</div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>



<script>
export default {
  name: 'Patterns',
  data() {
    return {
      openSection: null 
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
