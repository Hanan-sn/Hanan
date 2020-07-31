import { reqSummaryData} from '../../api'
import { SummaryRelationChart } from '../mutation-types'

export default {
  state: {
    relationChart: {}
  },
  getters: {},
  actions: {
    async getSummaryRelationChart({ commit }) {
      const result = await reqSummaryData()
      commit(SummaryRelationChart, { result })
    }
  },
  mutations: {
    [SummaryRelationChart](state, { result }) {
      const { data } = result
      state.relationChart = data
      console.log(data)
    }
  }
}

