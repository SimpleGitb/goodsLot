const state = {
  isBack: '首页'
}
const mutations = {
  changeIsBack (state, flag) {
    state.isBack = flag
  }
}
export default {
  state,
  mutations
}
