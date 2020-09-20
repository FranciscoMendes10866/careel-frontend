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
            <vs-input
              v-model="localEmail"
              primary
              placeholder="Email"
              @input="handleRegisterEmail"
            />
            <vs-input
              v-model="localPassword"
              placeholder="Palavra passe"
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
            <div class="flex">
              <vs-radio
                v-model="picked"
                label-after
                val="talent"
                class="m-y"
                @input="handleRegisterRole"
                >Talento</vs-radio
              >
              <vs-radio
                v-model="picked"
                label-after
                val="employer"
                class="m-y"
                @input="handleRegisterRole"
                >Empregador</vs-radio
              >
              <vs-radio
                v-model="picked"
                label-after
                val="sponsor"
                class="m-y"
                @input="handleRegisterRole"
                >Patrocinador</vs-radio
              >
            </div>
            <vs-checkbox
              v-model="localTerms"
              class="ch-m-y"
              primary
              val="true"
              @input="handleRegisterTerms"
            >
              Li e aceito os&nbsp;
              <nuxt-link class="dec" to="/terms">
                <b>Termos e Condições</b>
                &nbsp;do Damasus.</nuxt-link
              >
              <template #icon>
                <i class="bx bx-check"></i>
              </template>
            </vs-checkbox>
          </div>

          <template>
            <div class="footer-dialog">
              <vs-button block @click.prevent="SignUp">Criar conta.</vs-button>

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
import { mapMutations, mapActions } from 'vuex'
export default {
  layout: 'app',
  data: () => ({
    localEmail: '',
    localPassword: '',
    localTerms: false,
    picked: 'talent',
    hasVisiblePassword: false,
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
  methods: {
    ...mapMutations({
      setRegisterEmail: 'auth/setRegisterEmail',
      setRegisterPassword: 'auth/setRegisterPassword',
      setRegisterRole: 'auth/setRegisterRole',
      setRegisterTerms: 'auth/setRegisterTerms',
    }),
    ...mapActions({
      SignUp: 'auth/SignUp',
    }),
    handleRegisterPassword() {
      this.setRegisterPassword(this.localPassword)
    },
    handleRegisterRole() {
      this.setRegisterRole(this.picked)
    },
    handleRegisterEmail() {
      this.setRegisterEmail(this.localEmail)
    },
    handleRegisterTerms() {
      this.setRegisterTerms(this.localTerms)
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
