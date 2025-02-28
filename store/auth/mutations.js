export default {
  // Register mutations
  setRegisterEmail(state, registerEmail) {
    state.registerEmail = registerEmail
  },
  setRegisterPassword(state, registerPassword) {
    state.registerPassword = registerPassword
  },
  setRegisterRole(state, registerRole) {
    state.registerRole = registerRole
  },
  setRegisterTerms(state, registerTerms) {
    state.registerTerms = registerTerms
  },
  // Login mutations
  setLoginEmail(state, loginEmail) {
    state.loginEmail = loginEmail
  },
  setLoginPassword(state, loginPassword) {
    state.loginPassword = loginPassword
  },
  // User Data
  setToken(state, token) {
    state.token = token
  },
  setIsPublic(state, isPublic) {
    state.isPublic = isPublic
  },
  setIsAdmin(state, isAdmin) {
    state.isAdmin = isAdmin
  },
  setRole(state, role) {
    state.role = role
  },
  setNewsletter(state, newsletter) {
    state.newsletter = newsletter
  },
  setJob(state, job) {
    state.job = job
  },
}
