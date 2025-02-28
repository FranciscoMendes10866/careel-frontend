export default {
  isLoggedIn(state) {
    return !!state.token
  },
  isItPublic(state) {
    return state.isPublic
  },
  isAnAdmin(state) {
    return state.isAdmin
  },
  whatRole(state) {
    return state.role
  },
  isSubscribed(state) {
    return state.newsletter
  },
  foundJob(state) {
    return state.job
  },
}
