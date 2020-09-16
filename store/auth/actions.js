export default {
  // Register actions
  SignUp({ commit, state }) {
    const clientState = {
      email: state.registerEmail,
      password: state.registerPassword,
      role: state.registerRole,
      terms_conditions: state.registerTerms,
    }
    return (
      this.$api
        .post('/auth/sign_up', clientState)
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
  // Login actions
  SignIn({ commit, state }) {
    const clientState = {
      email: state.loginEmail,
      password: state.loginPassword,
      device_platform: this.$ua.os(),
      device_product: this.$ua.browser(),
      device_type: this.$ua.deviceType(),
    }
    // eslint-disable-next-line no-console
    console.log(clientState)
    return (
      this.$api
        .post('/auth/sign_in', clientState)
        // eslint-disable-next-line no-console
        .then(({ data }) => {
          if (data.user.is_admin !== true && data !== 500) {
            commit('setLoginEmail', null)
            commit('setLoginPassword', null)
            commit('setToken', data.token)
            commit('setRole', data.user.role)
            commit('setIsPublic', data.user.is_public)
            commit('setIsAdmin', data.user.is_admin)
            commit('setNewsletter', data.user.newsletter)
            commit('setJob', data.user.job)
            // eslint-disable-next-line no-undef
            this.$router.push('/dashboard')
          } else if (data.user.is_admin !== false && data !== 500) {
            commit('setLoginEmail', null)
            commit('setLoginPassword', null)
            commit('setToken', data.token)
            commit('setRole', data.user.role)
            commit('setIsPublic', data.user.is_public)
            commit('setIsAdmin', data.user.is_admin)
            commit('setNewsletter', data.user.newsletter)
            commit('setJob', data.user.job)
            // eslint-disable-next-line no-undef
            this.$router.push('/admin')
          } else {
            // eslint-disable-next-line no-console
            console.log('Ocorreu um erro.')
          }
        })
    )
  },
  // Logout actions
  LogOut({ commit }) {
    commit('setToken', null)
    commit('setRole', null)
    commit('setIsPublic', null)
    commit('setIsAdmin', null)
    commit('setNewsletter', null)
    commit('setJob', null)
    this.$router.push('/')
  },
  // Account actions
  // Become public
  BecomePublic({ commit, state }) {
    const publicButton = { is_public: true }
    return this.$api
      .put('/account/change_is_public', publicButton, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then(({ data }) => {
        if (data === 200) {
          commit('setIsPublic', true)
        } else {
          // eslint-disable-next-line no-console
          console.log('Ocorreu um erro.')
        }
      })
  },
  // Become private
  BecomePrivate({ commit, state }) {
    const privateButton = { is_public: false }
    return this.$api
      .put('/account/change_is_public', privateButton, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then(({ data }) => {
        if (data === 200) {
          commit('setIsPublic', false)
        } else {
          // eslint-disable-next-line no-console
          console.log('Ocorreu um erro.')
        }
      })
  },
  // Newsletter actions
  // Subscribe Newsletter
  Subscribe({ commit, state }) {
    const subscribe = { newsletter: true }
    return this.$api
      .put('/account/change_newsletter', subscribe, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then(({ data }) => {
        if (data === 200) {
          commit('setNewsletter', true)
        } else {
          // eslint-disable-next-line no-console
          console.log('Ocorreu um erro.')
        }
      })
  },
  // Unsubscribe Newsletter
  UnSubscribe({ commit, state }) {
    const unSubscribe = { newsletter: false }
    return this.$api
      .put('/account/change_newsletter', unSubscribe, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then(({ data }) => {
        if (data === 200) {
          commit('setNewsletter', false)
        } else {
          // eslint-disable-next-line no-console
          console.log('Ocorreu um erro.')
        }
      })
  },
  // Job actions
  // The user found a job
  FoundJob({ commit, state }) {
    const found = { job: true, is_public: false }
    return this.$api
      .put('/account/change_job', found, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then(({ data }) => {
        if (data === 200) {
          commit('setIsPublic', false)
          commit('setJob', true)
        } else {
          // eslint-disable-next-line no-console
          console.log('Ocorreu um erro.')
        }
      })
  },
  // The user is looking for a job
  FindingJob({ commit, state }) {
    const finding = { job: false, is_public: true }
    return this.$api
      .put('/account/change_job', finding, {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then(({ data }) => {
        if (data === 200) {
          commit('setIsPublic', true)
          commit('setJob', false)
        } else {
          // eslint-disable-next-line no-console
          console.log('Ocorreu um erro.')
        }
      })
  },
}
