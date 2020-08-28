<template>
  <div>
    <!-- Empty div -->
    <!-- Because the content of this component is the PopUpContent -->
  </div>
</template>

<script>
import PopUpContent from './PopUpContent'

export default {
  mounted() {
    this.openPopUp()
  },
  methods: {
    openPopUp() {
      this.$vs.notification({
        sticky: true,
        border: 'primary',
        duration: 'none',
        position: 'bottom-center',
        content: PopUpContent,
      })
    },
  },
}
</script>
