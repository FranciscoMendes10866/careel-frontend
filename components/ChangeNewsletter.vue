<template>
  <div>
    <vs-button v-if="isSubscribed == false" success @click="Subscribe"
      >Subscrever.</vs-button
    >
    <vs-button v-else danger @click="UnSubscribe"
      >Terminar subscrição.</vs-button
    >
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isSubscribed: 'auth/isSubscribed',
    }),
  },
  methods: {
    ...mapActions({
      Subscribe: 'auth/Subscribe',
      UnSubscribe: 'auth/UnSubscribe',
    }),
  },
}
</script>
