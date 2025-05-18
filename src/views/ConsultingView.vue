<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <!-- Header -->
    <header class="fixed flex justify-between items-center w-full top-0 text-center py-4 px-4 bg-white shadow">
        <img @click="() => $router.back()" src="../assets/back-arrow.svg" alt="">
        <h1 class="text-lg font-semibold text-gray-800">Ерии ҳуқуқӣ</h1>
        <div></div>
    </header>

    <!-- Chatbot Card -->
    <main class="flex-1 flex flex-col items-center justify-start px-4 pt-32">
      <div class="bg-white rounded-3xl shadow-md w-full max-w-sm text-center p-6">
        <div class="flex justify-center mb-4">
          <img
            src="../assets/bot-avatar.svg"
            alt="Robot Avatar"
            class="w-24 h-24 rounded-full"
          />
        </div>
        <h2 class="text-xl font-semibold text-gray-800">Одил</h2>
        <p class="text-gray-500 text-sm mb-2">мушовири ҳуқуқӣ</p>
      </div>

      <!-- Suggested Questions -->
      <div v-if="showSuggestions" class="flex flex-col space-y-3 mt-3">
        <button
          class="bg-white border-mine2 rounded-full px-4 py-2 text-sm font-medium hover:bg-cyan-50"
          v-for="(q, i) in suggestions"
          :key="i"
          @click="sendMessage(q)"
        >
          {{ q }}
        </button>
      </div>

      <!-- Chat Messages -->
      <div class="mt-4 w-full max-w-sm space-y-2 px-1 overflow-y-auto">
        <div v-for="(msg, i) in messages" :key="i" class="text-sm">
          <div
            :class="msg.role === 'user' ? 'text-right' : 'text-left text-gray-700'"
          >
            <div
              :class="msg.role === 'user'
                ? 'inline-block bg-blue-200 text-gray-800 px-3 py-2 rounded-2xl'
                : 'inline-block bg-gray-200 text-gray-800 px-3 py-2 rounded-2xl'"
            >
              {{ msg.content }}
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Chat Input -->
    <footer class="w-full fixed bottom-0">
      <div class="flex items-center w-full bg-white shadow-md px-4 py-2">
        <textarea
          placeholder="имрӯз ман бо як муаммое ..."
          rows="1"
          v-model="input"
          @keydown.enter.exact.prevent="handleSubmit"
          class="flex-1 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none text-sm"
        ></textarea>
        <button @click="handleSubmit" class="p-2">
          <img src="../assets/send.svg" alt="Send" />
        </button>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ChatbotScreen",
  data() {
    return {
      input: "",
      showSuggestions: true,
      suggestions: [
        "Чӣ гуна шахси воқеӣ (ЭП) сабтином карда мешавад?",
        "Агар маро боздошт кунанд, чӣ бояд кунам?",
        "Чӣ гуна шаҳодатномаи ронандагӣ мегирам?",
        "Агар касе ба ман пора пешниҳод кунад, чӣ кор кунам?",
      ],
      messages: [],
    };
  },
  methods: {
    async sendMessage(content) {
      if (!content.trim()) return;

      this.messages.push({ role: "user", content });
      this.input = "";
      this.showSuggestions = false;

      try {
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.VUE_APP_OPENAI_KEY}`
          },
          body: JSON.stringify({
            model: "gpt-4o",
            messages: this.messages,
          }),
        });

        const data = await res.json();
        const reply = data.choices[0].message.content.trim();
        this.messages.push({ role: "assistant", content: reply });
      } catch (error) {
        this.messages.push({
          role: "assistant",
          content: "Маъзур, ҷавоб гирифтан ғайриимкон шуд.",
        });
        console.error("API Error:", error);
      }
    },
    handleSubmit() {
      if (this.input.trim()) {
        this.sendMessage(this.input.trim());
      }
    },
  },
};
</script>

<style scoped>
/* Optional styling tweaks */
</style>
