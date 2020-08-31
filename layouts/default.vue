<template>
  <div>
    <!-- Back to Top link -->
    <span id="top"></span>
    <Navbar />
    <SupportChat />
    <a href="#top" class="back-top">
      <BackTopButton />
    </a>
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import SupportChat from '@/components/SupportChat.vue'
import BackTopButton from '@/components/BackTopButton.vue'
if (process.client) {
  // Document onScroll functions
  window.onscroll = function () {
    BackToTop()
  }
  // Back to top - Anchor
  // When the user scrolls down 20px from the top of the document, show the anchor
  // eslint-disable-next-line no-inner-declarations
  function BackToTop() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.querySelector('.back-top').style.display = 'block'
    } else {
      document.querySelector('.back-top').style.display = 'none'
    }
  }
}
export default {
  components: {
    Navbar,
    SupportChat,
    BackTopButton,
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
  scroll-behavior: smooth;
}
.back-top {
  display: none;
}
</style>
