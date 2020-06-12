import { getAdminSetting, setAdminSetting } from '../../common/config/datastore'
import { deepCopy } from '../../common/utils/assist'

const app = {
  state: {
    sidebar: true,
    theme: '',
    menuType: '',
    headerMenu: [],
    asideMenu: []
  },
  mutations: {
    EXAMPLE: (state, val) => {
      state.xxx = val
    }
  },
  actions: {
    testAction: ({ commit, state }) => {
      commit('EXAMPLE', state.testAction)
    }
  }
}

export default app
