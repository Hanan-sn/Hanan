import { reqUnionData } from '../../api/index'
import { UnionData } from '../mutation-types'
export default {
  state: {
    union: {
      rpTotal: 0,
      memoTotal: 2,
      deptTotal: 55,
      naturalPerson: 0,
      naturalPersonReward: 0,
      naturalPersonPunish: 0,
      legalPerson: 0,
      legalPersonReward: 0,
      legalPersonPunish: 0
    },
    rbNameList: {
      redList: { signCom: 0, taxpayer: 0, corp: 0, volunteer: 1 },
      blackList: { performed: 0, case: 0, unpaid: 0, lose: 1 }
    },
    trend: [
      ['product', '惩戒', '激励'],
      ['1月', 500, 600],
      ['2月', 800, 700],
      ['3月', 1200, 800],
      ['4月', 1100, 1200],
      ['5月', 400, 1100],
      ['6月', 500, 700]
    ],
    classify: [
      ['product', '惩戒'],
      ['市统计局',600],
      [ '市商务局',500],
      [ '镇江海关',520],
      ['市地方金融监督管理局',420],
      ['市银保监分局',400],
      ['人行镇江市中心支行',600],
      ['市组织部',650],
      ['市发改委',800]
    ],
    feedbackClassify: [
      ['product', '惩戒'],
      ['市统计局',600],
      [ '市商务局',500],
      [ '镇江海关',520],
      ['市地方金融监督管理局',420],
      ['市银保监分局',400],
      ['人行镇江市中心支行',600],
      ['市组织部',650],
      ['市发改委',800]
    ],
    memoTrend: [
      ['product', '反馈数'],
      ['1月', 500],
      ['2月', 800],
      ['3月', 1200],
      ['4月', 1100],
      ['5月', 400],
      ['6月', 500]
    ],
    memoStatusList: [
      { name: '房产交易', count: 8848},
      { name: '规划设计方案', count: 8848},
      { name: '股票交易', count: 8848},
      { name: '不动产转移', count: 8848}
    ],
    punishRewardList: [
      {
        "name": "李杰",
        "info": "模拟信息2",
        "dept": "模拟部门2",
        "time": "1982-10-07"
      },
      {
        "name": "秦桂英",
        "info": "模拟信息1",
        "dept": "模拟部门1",
        "time": "1987-09-02"
      },
      {
        "name": "易刚",
        "info": "模拟信息1",
        "dept": "模拟部门2",
        "time": "1976-10-21"
      },
      {
        "name": "常静",
        "info": "模拟信息1",
        "dept": "模拟部门2",
        "time": "2020-03-16"
      },
      {
        "name": "贾明",
        "info": "模拟信息2",
        "dept": "模拟部门1",
        "time": "1974-02-04"
      },
      {
        "name": "雷娜",
        "info": "模拟信息2",
        "dept": "模拟部门2",
        "time": "1982-12-07"
      },
      {
        "name": "马强",
        "info": "模拟信息1",
        "dept": "模拟部门1",
        "time": "1970-11-18"
      },
      {
        "name": "金敏",
        "info": "模拟信息2",
        "dept": "模拟部门2",
        "time": "1992-12-07"
      },
      {
        "name": "毛秀英",
        "info": "模拟信息1",
        "dept": "模拟部门2",
        "time": "2016-07-12"
      },
      {
        "name": "郝磊",
        "info": "模拟信息1",
        "dept": "模拟部门2",
        "time": "1973-08-01"
      },
      {
        "name": "姜艳",
        "info": "模拟信息1",
        "dept": "模拟部门1",
        "time": "1978-11-06"
      },
      {
        "name": "熊勇",
        "info": "模拟信息1",
        "dept": "模拟部门2",
        "time": "2004-03-04"
      },
      {
        "name": "汤强",
        "info": "模拟信息2",
        "dept": "模拟部门1",
        "time": "1987-08-03"
      },
      {
        "name": "彭强",
        "info": "模拟信息1",
        "dept": "模拟部门2",
        "time": "2016-06-17"
      },
      {
        "name": "夏磊",
        "info": "模拟信息1",
        "dept": "模拟部门2",
        "time": "2002-11-28"
      },
      {
        "name": "金军",
        "info": "模拟信息1",
        "dept": "模拟部门1",
        "time": "1980-12-22"
      },
      {
        "name": "程娟",
        "info": "模拟信息1",
        "dept": "模拟部门1",
        "time": "1973-11-25"
      },
      {
        "name": "万秀英",
        "info": "模拟信息2",
        "dept": "模拟部门2",
        "time": "2004-03-31"
      },
      {
        "name": "蔡杰",
        "info": "模拟信息2",
        "dept": "模拟部门1",
        "time": "2013-10-04"
      },
      {
        "name": "汤军",
        "info": "模拟信息1",
        "dept": "模拟部门1",
        "time": "1983-11-21"
      }
    ],
    measure: [
      ['措施名', '数量'],
      ['措施名称1', 500],
      ['措施名称2', 400],
      ['措施名称3', 450],
      ['措施名称4', 300],
      ['措施名称5', 460],
      ['措施名称6', 600],
      ['措施名称7', 400],
      ['措施名称8', 360]
    ],
    quitTrend: [
      ['product', '名单数'],
      ['1月', 500],
      ['2月', 800],
      ['3月', 1200],
      ['4月', 700],
      ['5月', 400],
      ['6月', 500]
    ]
  },
  actions: {
    async getUnionData({commit}){
      const result = await reqUnionData()
      commit (UnionData, {result})
    }
  },
  mutations: {
    [UnionData](state, {result}){
      const { data } = result
      for (let key in data){
        state[key] = data[key]
      }
    }
  }
}
