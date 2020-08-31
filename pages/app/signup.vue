<template>
  <div class="grid">
    <vs-row class="screen" align="center">
      <vs-col offset="2" w="8" align="center">
        <div class="center width">
          <template>
            <h4 class="not-margin">
              Bem-vindo ao
              <b>Damasus</b>.
            </h4>
          </template>

          <div class="con-form">
            <vs-input placeholder="Email" />
            <vs-input placeholder="Palavra-passe" />
            <div class="flex">
              <vs-radio v-model="picked" label-before val="1" class="m-y"
                >Talento</vs-radio
              >
              <vs-radio v-model="picked" label-before val="2" class="m-y"
                >Empregador</vs-radio
              >
            </div>
            <vs-checkbox v-model="option" primary class="ch-m-y">
              Li e aceito os&nbsp;
              <nuxt-link class="dec" to="/terms"
                ><b>Termos e Condições</b></nuxt-link
              >&nbsp;do Damasus.
              <template #icon>
                <i class="bx bx-check"></i>
              </template>
            </vs-checkbox>
          </div>

          <template>
            <div class="footer-dialog">
              <vs-button block>Criar conta.</vs-button>

              <div class="new">
                Já tem uma conta?
                <nuxt-link to="/app/signin">Inicie a sua sessão.</nuxt-link>
              </div>
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
    picked: 1,
    option: false,
  }),
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

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

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
  margin-top: 10px;
  margin-bottom: 20px;
}

.dec {
  text-decoration: none;
  color: black;
}

.ch-m-y {
  margin-top: 5px;
  margin-bottom: 20px;
}
</style>
