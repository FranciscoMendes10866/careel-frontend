<template>
  <div>
    <SidebarHover />
    <Nuxt />
  </div>
</template>

<script>
import SidebarHover from '@/components/SidebarHover.vue'

export default {
  components: {
    SidebarHover,
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
