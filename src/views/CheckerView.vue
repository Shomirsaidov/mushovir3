<template>

    <header class=" w-full text-center py-4 bg-white shadow">
      <h1 class="text-lg font-semibold text-gray-800">Ҳуҷҷатгузорӣ</h1>
    </header>

  <div class=" max-w-md mx-auto p-6 mt-1 bg-white  shadow-md space-y-6 pb-40">
    <!-- Title Input -->
    <div>
      <label class="block text-gray-700 font-semibold mb-2">Номи расмии ҳуҷҷат</label>
      <input
        type="text"
        v-model="this.$store.state.docData.title"
        class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Бақайдгирии молу мулки ғайриманқул"
      />
    </div>

    <!-- Description Textarea -->
    <div>
      <label class="block text-gray-700 font-semibold mb-2">Матни асосӣ</label>
      <textarea
        v-model="this.$store.state.docData.desc"
        rows="4"
        class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Ман ҳамчун Каримов Кузибой..."
      ></textarea>
    </div>

    <!-- Image Upload -->
    <div>
      <label class="block text-gray-700 font-semibold mb-2">Расми ҳуҷҷатро интихоб кунед</label>
      <input type="file" @change="previewImage" accept="image/*" />
      <div v-if="imageUrl" class="mt-4">
        <img :src="imageUrl" alt="Preview" class="rounded-xl max-w-full h-auto shadow-md" />
      </div>
    </div>

    <button @click="next" class="bg-gradient text-white text-lg font-semibold p-4 rounded-full">Тафтиш кардан</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: null,
    };
  },
  methods: {
    previewImage(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/")) {
        this.imageUrl = URL.createObjectURL(file);
      } else {
        this.imageUrl = null;
      }
    },
    next() {
        this.$router.push('/docs/check/results')
    }
  },
};
</script>


