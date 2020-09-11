<template>
  <div>
    <vs-input
      v-model="changePassword"
      placeholder="Insira a nova palavra passe"
      primary
      type="password"
      :progress="getProgress"
      :visible-password="hasVisiblePassword"
      icon-after
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
    <vs-button primary @click="ChangePasswordFunc">
      <i class="bx bx-refresh"></i>&nbsp; Alterar</vs-button
    >
  </div>
</template>

<script>
export default {
  data: () => ({
    hasVisiblePassword: false,
    changePassword: '',
  }),
  computed: {
    getProgress() {
      let progress = 0
      // at least one number
      if (/\d/.test(this.changePassword)) {
        progress += 30
      }
      // at least one capital letter
      if (/(.*[A-Z].*)/.test(this.changePassword)) {
        progress += 20
      }
      // at least a lowercase
      if (/(.*[a-z].*)/.test(this.changePassword)) {
        progress += 25
      }
      // more than 8 digits
      if (this.changePassword === null) {
        progress += 0
      } else if (this.changePassword.length >= 8) {
        progress += 25
      }
      return progress
    },
  },
  methods: {
    ChangePasswordFunc() {
      const componentState = { password: this.changePassword }
      return (
        this.$api
          .put('/account/change_password', componentState, {
            headers: {
              Authorization: `Bearer ${this.$store.state.auth.token}`,
            },
          })
          .then(() => {
            this.$vs.notification({
              icon: `<i class='bx bx-check' ></i>`,
              color: 'success',
              progress: 'auto',
              duration: 10000,
              sticky: true,
              position: 'top-right',
              title: 'Palavra passe alterada com sucesso.',
              text: `A nova palavra passe já se encontra em vigor.
              Assim que iniciar uma nova sessão já a poderá utilizar.`,
            })
          })
          // eslint-disable-next-line no-console
          .catch(() => {
            this.$vs.notification({
              icon: `<i class='bx bx-error' ></i>`,
              color: 'danger',
              progress: 'auto',
              duration: 10000,
              sticky: true,
              position: 'top-right',
              title: 'Occorreu um erro.',
              text: `Tem a certeza que preencheu os dados devidamente?`,
            })
          })
      )
    },
  },
}
</script>
