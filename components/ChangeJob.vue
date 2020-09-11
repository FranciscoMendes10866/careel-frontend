<template>
  <div>
    <vs-button v-if="foundJob == false" success @click="FoundJob"
      >Encontrei emprego.</vs-button
    >
    <vs-button v-else danger @click="FindingJob">Estou á procura.</vs-button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      foundJob: 'auth/foundJob',
    }),
  },
  methods: {
    ...mapActions({
      FoundJob: 'auth/FoundJob',
      FindingJob: 'auth/FindingJob',
    }),
  },
}
</script>
