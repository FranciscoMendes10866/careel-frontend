export default {
  // Register actions
  SignUp({ commit, state }) {
    const data = {
      email: state.registerEmail,
      password: state.registerPassword,
      role: state.registerRole,
      terms_conditions: state.registerTerms,
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
