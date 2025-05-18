
<template>
  <div v-if="!shouldHide" class="flex items-center justify-around fixed bottom-0 w-full bg-white rounded-t-[40px] border p-6 pb-7 border-grey-600">
    <router-link to="/ai">
      <img width="25" src="../assets/chat-bottom.svg" alt="Chat" />
    </router-link>
    <router-link to="/docs">
      <img width="25" src="../assets/doc-bottom.svg" alt="Documents" />
    </router-link>
    <router-link to="/">
      <img width="25" src="../assets/home-bottom.svg" alt="Home" />
    </router-link>
    <router-link to="/navigate">
      <img width="25" src="../assets/search-bottom.svg" alt="Search" />
    </router-link>
    <router-link to="/health">
      <img width="25" src="../assets/health-bottom.svg" alt="Health" />
    </router-link>
  </div>
</template>


<script>
export default {
  computed: {
    shouldHide() {
      const currentPath = this.$route.path
      return currentPath === '/ai' || currentPath === '/mushovir'
    }
  }
}
</script>
