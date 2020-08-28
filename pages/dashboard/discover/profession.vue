<template>
  <div>
    <vs-row class="screen" align="center">
      <vs-col offset="2" w="8">
        <SelectByProfession class="margin" />
        <Card />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import SelectByProfession from '@/components/SelectByProfession.vue'

export default {
  layout: 'dashboard',
  components: {
    Card,
    SelectByProfession,
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
