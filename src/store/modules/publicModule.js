import {
  reqPublicData
} from '../../api'
import {
  PublicData
} from '../mutation-types'

export default {
  state: {
    deptList: [
      { name: '镇江市公安局', count: 1644424, percent: 10 },
      { name: '句容市行政审批局', count: 8398, percent: 10 },
      { name: '国家税务总局扬中市税务局', count: 3492, percent: 10 },
      { name: '国家税务总局句容市税务局第一税务分局', count: 2861, percent: 10 },
      { name: '丹阳市城管局', count: 2355, percent: 10 },
      { name: '镇江市卫生健康委员会', count: 2083, percent: 10 },
      { name: '镇江市城区地方海事处', count: 1907, percent: 10 },
      { name: '丹阳地方海事处', count: 917, percent: 10 },
      { name: '丹阳市住房和城乡建设局镇江市', count: 875, percent: 10 },
      { name: '丹阳市公安局', count: 777, percent: 10 }
    ],
    week: [
      ['product', '数量'],
      ['1天', 0],
      ['2天', 0],
      ['3天', 0],
      ['4天', 0],
      ['5天', 0],
      ['6天', 0],
      ['7天', 0],
    ],
    collectionSituation: [
      ['product', '行政许可', '行政处罚'],
      ['6月', 16000, 10]
    ],
    repair: [
      ['product', '数量'],
      ['1月', 0],
      ['2月', 0],
      ['3月', 0],
      ['4月', 0],
      ['5月', 0],
      ['6月', 0],
      ['7月', 0],
      ['8月', 0],
      ['9月', 0],
      ['10月', 0],
      ['11月', 0],
      ['12月', 0]
    ],
    classify: {
      outer: [
        { value: 1678374, name: '普通' },
        { value: 598, name: '特许' },
        { value: 350, name: '认可' },
        { value: 619, name: '核准' },
        { value: 429, name: '登记' },
        { value: 8, name: '其他' }
      ],
      inner: [
        { value: 885265, name: '行政许可' }
      ]
    },
    midSources: {
      natualPersonLicense: 1649373,
      natualPersonPunish: 16,
      legalPersonLicense: 164,
      legalPersonPunish: 16,
    },
    newAdd: {
      adminLicense: 10,
      adminPunish: 10
    }
  },
  actions: {
    async getPublicData({commit}){
      const result = await reqPublicData()
      commit(PublicData, {result})
    }
  },
  mutations: {
    [PublicData](state, {result}){
      const { data } = result
      for (let key in data){
        state[key] = data[key]
      }
    }
  }
}
