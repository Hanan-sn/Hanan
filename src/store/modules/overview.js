import { reqOverviewData, reqOverviewDataExchange, reqOverviewReport } from '../../api'
import { Overview, OverviewReport, OverviewDataExchange } from '../mutation-types'

export default {
  state: {
    union: {
      memoCount: 0,
      measureCount: 0,
      deptCount: 0,
      chartData: {
        inner: [
          { value: 0, name: '惩戒' },
          { value: 0, name: '激励' }
        ],
        outer: [
          { value: 0, name: '法人惩戒' },
          { value: 0, name: '自然人惩戒' },
          { value: 0, name: '法人激励' },
          { value: 0, name: '自然人激励' }
        ]
      }
    }, // 联合奖惩
    dataExchange: {
      getIn: 0,
      getOut: 0,
      getInCorrect: '0%',
      getOutCorrect: '0%',
      dockedAbnormal: 0,
      dockedNormal: 0,
      chartData: [
        ['product', '归集', '输出'],
        ['1月', 0, 0],
        ['2月', 0, 0],
        ['3月', 0, 0],
        ['4月', 0, 0],
        ['5月', 0, 0],
        ['6月', 0, 0],
        ['7月', 0, 0],
        ['8月', 0, 0],
        ['9月', 0, 0],
        ['10月', 0, 0],
        ['11月', 0, 0],
        ['12月', 0, 0]
      ]
    },
    total: [0, 0, 0, 0, 0, 0, 0, 0],
    rotateData: [
      { name: '法人基础数量', value: 0 },
      { name: '自然人基础数量', value: 0 },
      { name: '法人信用信息', value: 0 },
      { name: '自然人信用信息', value: 0 },
      { name: '法人人均数量', value: 0 },
      { name: '自然人人均数量', value: 0 }
    ],
    redBlackList: {
      redList: {
        signCom: 0,
        taxpayer: 0,
        corp: 0,
        volunteer: 0
      },
      blackList: {
        performed: 0,
        case: 0,
        unpaid: 0,
        lose: 0
      }
    }, // 红黑名称
    collection: {
      lv1: 0,
      lv2: 0,
      resourceCount: 0,
      deptCount: 0,
      chartData: [
        ['product', '信息量'],
        ['基础信息', 0],
        ['业务信息', 0],
        ['司法信息', 0],
        ['行政执法信息', 0],
        ['公共事业信息', 0],
        ['信用评级信息', 0],
        ['其他信息', 0],
        ['累计', 0]
      ]
    }, // 部门数据归集统计
    report: {
      chartData: [
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
      ]
    },
    submission: [
      { name: '部门名称', count: 0, percent: '0%' },
      { name: '部门名称', count: 0, percent: '0%' },
      { name: '部门名称', count: 0, percent: '0%' },
      { name: '部门名称', count: 0, percent: '0%' },
      { name: '部门名称', count: 0, percent: '0%' },
      { name: '部门名称', count: 0, percent: '0%' }
    ]
  },
  getters: {},
  actions: {
    // 交互
    async getOverviewDataExchange({ commit }, params) {
      const result = await reqOverviewDataExchange(params)
      commit(OverviewDataExchange, { result })
    },
    async getOverviewReport({ commit }, params) {
      const result = await reqOverviewReport(params)
      commit(OverviewReport, { result })
    },
    // 初始
    async getOverview({ commit }) {
      const result = await reqOverviewData()
      commit(Overview, { result })
    }
  },
  mutations: {
    [Overview](state, { result }) {
      const { data } = result
      for (let key in data) {
        state[key] = data[key]
      }
    },
    [OverviewReport](state, { result }) {
      const { data } = result
      state.report = data
    },
    [OverviewDataExchange](state, { result }) {
      const { data } = result
      state.dataExchange = data
    }
  }
}
