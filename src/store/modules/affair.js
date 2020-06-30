import { reqAffairData } from '../../api'
import { AffairData } from '../mutation-types'
export default {
  state:{
    civil: 0,
    mapData: [
      [{
        name: '句容区',
        value: 2
      }], [{
        name: '丹徒区',
        value: 3
      }], [{
        name: '润州区',
        value: 4
      }], [{
        name: '扬中市',
        value: 5
      }], [{
        name: '丹阳市',
        value: 6
      }]
    ]
  },
  actions: {
    async getUnionData({commit}){
      const result = await reqAffairData()
      commit (AffairData, {result})
    }
  },
  mutations: {
    [AffairData](state, {result}){
      const { data } = result
      for (let key in data){
        state[key] = data[key]
      }
    }
  }
}
