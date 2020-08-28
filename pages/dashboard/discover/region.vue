<template>
  <div>
    <vs-row class="screen" align="center">
      <vs-col offset="2" w="8">
        <SelectByRegion class="margin" />
        <Card />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import SelectByRegion from '@/components/SelectByRegion.vue'

export default {
  layout: 'dashboard',
  components: {
    Card,
    SelectByRegion,
  },
}
</script>

<style lang="stylus">
.margin {
  margin-bottom: 20px;
}
.screen {
  height: 95vh;
}
</style>
