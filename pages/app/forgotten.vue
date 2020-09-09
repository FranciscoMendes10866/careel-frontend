<template>
  <div class="grid">
    <vs-row class="screen" align="center">
      <vs-col offset="2" w="8" align="center">
        <div class="center width">
          <template>
            <h4 class="not-margin">
              Recupeção da
              <b>Palavra-passe</b>.
            </h4>
          </template>

          <div class="con-form">
            <vs-input v-model="forgottenEmail" placeholder="Email" />
          </div>

          <template>
            <div class="footer-dialog m-y">
              <vs-button block @click="forgotten">Submeter pedido.</vs-button>
            </div>
          </template>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
export default {
  layout: 'app',
  data: () => ({
    forgottenEmail: '',
  }),
  methods: {
    forgotten() {
      this.$api
        .post('/transactional/forgotten_password', {
          email: this.forgottenEmail,
        })
        // eslint-disable-next-line no-console
        .then((res) => console.log(res))
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err))
      this.$vs.notification({
        border: 'success',
        progress: 'auto',
        duration: 10000,
        sticky: true,
        position: 'top-center',
        title: 'O seu pedido foi processado com sucesso.',
        text: `Verifique a sua Caixa de Entrada,
            lá encontrará um email com a sua nova palavra passe.`,
      })
    },
  },
}
</script>
<style lang="stylus">
getColor(vsColor, alpha = 1) {
  unquote('rgba(var(--vs-' + vsColor + '), ' + alpha + ')');
}

getVar(var) {
  unquote('var(--vs-' + var + ')');
}

.not-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
}

.con-form {
  width: 100%;

  .vs-input-content {
    margin: 10px 0px;
    width: calc(100%);

    .vs-input {
      width: 100%;
    }
  }
}

.footer-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(100%);

  .new {
    margin: 0px;
    margin-top: 20px;
    padding: 0px;
    font-size: 0.7rem;

    a {
      color: getColor('primary') !important;
      margin-left: 6px;
      text-decoration: none;
      font-weight: bold;
    }
  }

  .vs-button {
    margin: 0px;
  }
}

.screen {
  height: 100vh;
}

.width {
  max-width: 400px;
}

.m-y {
  margin-top: 20px;
}
</style>
