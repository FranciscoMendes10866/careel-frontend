<template>
  <div>
    <vs-tooltip v-model="activeTooltip1" top shadow not-hover class="bottom">
      <vs-button
        size="xl"
        circle
        danger
        floating
        @click="activeTooltip1 = true"
      >
        <i class="bx bxs-chat"></i>
        &nbsp;&nbsp;Dúvidas
      </vs-button>
      <template #tooltip>
        <div class="content-tooltip">
          <h4 class="center">Qual é a sua dúvida?</h4>
          <vs-input v-model="email" type="email" placeholder="Email" />
          <vs-input
            v-model="subject"
            class="mg"
            type="text"
            placeholder="Assunto"
          />
          <vs-input
            v-model="message"
            class="mg"
            type="text"
            placeholder="Mensagem"
          />
          <footer>
            <vs-button primary block @click="SendMessage">Enviar.</vs-button>
            <vs-button transparent dark block @click="activeTooltip1 = false"
              >Cancelar</vs-button
            >
          </footer>
        </div>
      </template>
    </vs-tooltip>
  </div>
</template>

<script>
export default {
  data: () => ({
    activeTooltip1: false,
    email: '',
    message: '',
    subject: '',
  }),
  methods: {
    SendMessage() {
      const data = {
        email: this.email,
        subject: this.subject,
        message: this.message,
      }
      this.$api
        .post('/support', data)
        // eslint-disable-next-line no-console
        .then((res) => console.log(res))
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err))
    },
  },
}
</script>

<style>
.bottom {
  position: fixed;
  right: 70px;
  bottom: 30px;
  z-index: 50;
}
.mg {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
