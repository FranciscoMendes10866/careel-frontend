<template>
  <div>
    <vs-row class="screen" align="center">
      <vs-col offset="2" w="8">
        <Card />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  layout: 'dashboard',
  components: {
    Card,
  },
}
</script>

<style lang="stylus">
.screen {
  height: 95vh;
}
</style>
