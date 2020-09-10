export default {
  // Register actions
  SignUp({ commit, state }) {
    let terms = state.registerTerms
    if (terms === 'true') {
      terms = true
    } else {
      // eslint-disable-next-line no-unused-vars
      terms = false
    }
    const data = {
      email: state.registerEmail,
      password: state.registerPassword,
      role: state.registerRole,
      terms_conditions: terms,
    }
    // eslint-disable-next-line no-console
    console.log(data)
    return (
      this.$api
        .post('/auth/sign_up', data)
        // eslint-disable-next-line no-console
        .then(() => {
          commit('setRegisterEmail', null)
          commit('setRegisterPassword', null)
          commit('setRegisterRole', null)
          commit('setRegisterTerms', null)
          // eslint-disable-next-line no-undef
          $router.push('/app/signin')
        })
        // eslint-disable-next-line prettier/prettier
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err))
    )
  },
}
