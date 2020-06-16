/* vuex的核心管理对象 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
/* import map from  './modules/map'
import overview from  './modules/overview'
import dPublic from  './modules/public'
import summary from  './modules/summary'
import union from  './modules/union' */

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
  // modules: {
  //   map,
  //   dPublic,
  //   overview,
  //   summary,
  //   union
  // }
})
