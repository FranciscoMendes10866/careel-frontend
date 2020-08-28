<template>
  <div>
    <vs-row class="screen" align="center">
      <vs-col offset="2" w="8">
        <ApreciationCard />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import ApreciationCard from '@/components/ApreciationCard.vue'

export default {
  layout: 'dashboard',
  components: {
    ApreciationCard,
  },
}
</script>

<style lang="stylus">
.screen {
  height: 95vh;
}
</style>
