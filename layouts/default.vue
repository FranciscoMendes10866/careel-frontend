<template>
  <div>
    <Navbar />
    <SupportChat />
    <TermsConditions />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import SupportChat from '@/components/SupportChat.vue'
import TermsConditions from '@/components/TermsConditions.vue'

export default {
  components: {
    Navbar,
    SupportChat,
    TermsConditions,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap');

* {
  font-family: 'Quicksand', sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
</style>
