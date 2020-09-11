<template>
  <div>
    <vs-button v-if="isItPublic == false" success @click="BecomePublic"
      >Tornar perfil público.</vs-button
    >
    <vs-button v-else danger @click="BecomePrivate"
      >Tornar perfil privado.</vs-button
    >
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isItPublic: 'auth/isItPublic',
    }),
  },
  methods: {
    ...mapActions({
      BecomePublic: 'auth/BecomePublic',
      BecomePrivate: 'auth/BecomePrivate',
    }),
  },
}
</script>
