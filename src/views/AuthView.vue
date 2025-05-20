<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center px-4">
    <div class="w-full max-w-sm bg-white p-6 rounded-2xl shadow space-y-6">

        <img src="../assets/logo.png" alt="">

      <h2 class="text-2xl font-semibold text-center text-gray-800">
        {{ isRegister ? 'Бақайдгирӣ' : 'Воридшавӣ' }}
      </h2>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div v-if="isRegister">
          <label class="block text-sm font-medium text-gray-700 text-start">Ному Насаб</label>
          <input
            v-model="form.name"
            type="text"
            class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 text-start">Почтаи электронӣ</label>
          <input
            v-model="form.email"
            type="email"
            class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 text-start">Рамз</label>
          <input
            v-model="form.password"
            type="password"
            class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-gradient hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          {{ isRegister ? 'Фиристодан' : 'Ворид шудан' }}
        </button>
      </form>

      <p class="text-sm text-center text-gray-600">
        {{ isRegister ? 'Аккаунт доред ?' : "Аккаунт надоред ?" }}
        <button class="text-indigo-600 underline ml-1" @click="toggleMode">
          {{ isRegister ? 'Ворид шавед' : 'Худро ба қайд гиред' }}
        </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthForm',
  data() {
    return {
      isRegister: false,
      form: {
        name: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    toggleMode() {
      this.isRegister = !this.isRegister;
    },
    handleSubmit() {
        if(this.isRegister) {
            this.$store.state.user = {name: this.form.name}
        } else {
            this.$store.state.user = {name: "Лутфулло"}
        }
        
        this.$router.push('/')
    },
  },
};
</script>

<style scoped>
button:focus {
  outline: none;
}
</style>
