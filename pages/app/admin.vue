<template>
  <div class="grid">
    <vs-row class="screen" align="center">
      <vs-col offset="2" w="8" align="center">
        <div class="center width">
          <template>
            <h4 class="not-margin">
              Bem-vindo de volta
              <b>Admin</b>.
            </h4>
          </template>

          <div class="con-form">
            <vs-input
              v-model="localEmail"
              primary
              placeholder="Email"
              @input="handleLoginEmail"
            />
            <vs-input
              v-model="localPassword"
              placeholder="Palavra passe"
              primary
              type="password"
              :progress="getProgress"
              :visible-password="hasVisiblePassword"
              icon-after
              @input="handleLoginPassword"
              @click-icon="hasVisiblePassword = !hasVisiblePassword"
            >
              <template #icon>
                <i v-if="!hasVisiblePassword" class="bx bx-show-alt"></i>
                <i v-else class="bx bx-hide"></i>
              </template>
            </vs-input>
          </div>

          <template>
            <div class="footer-dialog m-y">
              <vs-button block @click="AdminSignIn">Iniciar sessão.</vs-button>

              <div class="new">
                <nuxt-link to="/app/forgotten"
                  >Esqueceu-se da palavra-passe?</nuxt-link
                >
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
    hasVisiblePassword: false,
  }),
  methods: {
    ...mapMutations({
      setLoginEmail: 'auth/setLoginEmail',
      setLoginPassword: 'auth/setLoginPassword',
    }),
    ...mapActions({
      AdminSignIn: 'auth/AdminSignIn',
    }),
    handleLoginEmail() {
      this.setLoginEmail(this.localEmail)
    },
    handleLoginPassword() {
      this.setLoginPassword(this.localPassword)
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
