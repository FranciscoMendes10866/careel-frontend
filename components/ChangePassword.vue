<template>
  <div>
    <vs-input
      v-model="localPassword"
      placeholder="Insira a nova palavra passe"
      primary
      type="password"
      :progress="getProgress"
      :visible-password="hasVisiblePassword"
      icon-after
      @input="handleRegisterPassword"
      @click-icon="hasVisiblePassword = !hasVisiblePassword"
    >
      <template #icon>
        <i v-if="!hasVisiblePassword" class="bx bx-show-alt"></i>
        <i v-else class="bx bx-hide"></i>
      </template>

      <template v-if="getProgress == 100" #message-success
        >Palavra passe segura</template
      >
    </vs-input>
  </div>
</template>

<script>
export default {
  data: () => ({
    hasVisiblePassword: false,
    localPassword: '',
  }),
  computed: {
    getProgress() {
      let progress = 0
      // at least one number
      if (/\d/.test(this.localPassword)) {
        progress += 30
      }
      // at least one capital letter
      if (/(.*[A-Z].*)/.test(this.localPassword)) {
        progress += 20
      }
      // at least a lowercase
      if (/(.*[a-z].*)/.test(this.localPassword)) {
        progress += 25
      }
      // more than 8 digits
      if (this.localPassword === null) {
        progress += 0
      } else if (this.localPassword.length >= 8) {
        progress += 25
      }
      return progress
    },
  },
}
</script>
