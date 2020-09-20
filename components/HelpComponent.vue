<template>
  <vs-row class="screen" align="center" justify="center">
    <vs-col w="2">
      <vs-input v-model="subject" primary placeholder="Assunto" />
    </vs-col>
    <vs-col w="2">
      <vs-input v-model="message" primary placeholder="Mensagem" />
    </vs-col>
    <vs-col w="1">
      <vs-button @click="UserSupport">
        <i class="bx bxs-paper-plane"></i>&nbsp;Enviar
      </vs-button>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  data: () => ({
    subject: '',
    message: '',
  }),
  methods: {
    UserSupport() {
      const componentState = {
        subject: this.subject,
        message: this.message,
      }
      return (
        this.$api
          .post('/support/user_support', componentState, {
            headers: {
              Authorization: `Bearer ${this.$store.state.auth.token}`,
            },
          })
          // eslint-disable-next-line no-console
          .then(() => {
            this.$vs.notification({
              icon: `<i class='bx bx-check' ></i>`,
              color: 'success',
              progress: 'auto',
              duration: 10000,
              sticky: true,
              position: 'top-right',
              title: 'O seu pedido foi processado com sucesso.',
              text: `No prazo de 24h,
              será respondida a sua questão.`,
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

<style lang="stylus">
.margin {
  margin-bottom: 40px;
}

.screen {
  height: 97vh;
}
</style>
