<template>
  <div>
    <vs-row>
      <vs-col offset="2" w="8">
        <vs-card-group>
          <Card />
        </vs-card-group>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  layout: 'app',
  components: {
    Card,
  },
}
</script>
