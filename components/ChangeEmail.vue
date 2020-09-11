<template>
  <div>
    <vs-input v-model="changeEmail" primary placeholder="Insira o novo email" />
    <vs-button primary @click="ChangeEmailFunc">
      <i class="bx bx-refresh"></i>&nbsp; Alterar</vs-button
    >
  </div>
</template>

<script>
export default {
  data: () => ({
    changeEmail: '',
  }),
  methods: {
    ChangeEmailFunc() {
      const componentState = { email: this.changeEmail }
      return (
        this.$api
          .put('/account/change_email', componentState, {
            header: {
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
              title: 'Email alterado com sucesso.',
              text: `O novo email já se encontra em vigor.
              Assim que iniciar uma nova sessão já o poderá utilizar.`,
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
