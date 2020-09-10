export default {
  // Register actions
  SignUp({ commit, state }) {
    const data = {
      email: state.registerEmail,
      password: state.registerPassword,
      role: state.registerRole,
      terms_conditions: state.registerTerms,
    }
    return (
      this.$api
        .post('/auth/sign_up', data)
        // eslint-disable-next-line no-console
        .then(({ data }) => {
          if (data === 200) {
            commit('setRegisterEmail', null)
            commit('setRegisterPassword', null)
            commit('setRegisterRole', 'talent')
            commit('setRegisterTerms', false)
            // eslint-disable-next-line no-undef
            this.$router.push('/app/signin')
          } else {
            // eslint-disable-next-line no-console
            console.log('Ocorreu um erro.')
          }
        })
    )
  },
}
