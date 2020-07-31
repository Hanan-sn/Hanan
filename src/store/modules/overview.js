import { reqOverviewData } from '../../api'
import { Overview } from '../mutation-types'

export default {
  state: {
    memoCount: [
      { value: 335, name: '直接访问' },
      { value: 100, name: '邮件营销' }
    ],
    queryTrend: [
      ['product', '数量'],
      ['1月', 100],
      ['2月', 200],
      ['3月', 300],
      ['4月', 400],
      ['5月', 500],
      ['6月', 470],
      ['7月', 740],
      ['8月', 440],
      ['9月', 610],
      ['10月', 350],
      ['11月', 400],
      ['12月', 560]
    ],
    mapData: [
      {
        name: '黑龙江',
        value: 1000
      },
      {
        name: '北京市',
        value: 3000
      },
      {
        name: '内蒙古',
        value: 1000
      },
      {
        name: '吉林',
        value: 100
      },
      {
        name: '辽宁',
        value: 1000
      },
      {
        name: '河北',
        value: 2000
      },
      {
        name: '北京',
        value: 254
      },
      {
        name: '天津',
        value: 500
      },
      {
        name: '山西',
        value: 600
      },
      {
        name: '陕西',
        value: 500
      },
      {
        name: '甘肃',
        value: 600
      },
      {
        name: '宁夏',
        value: 100
      },
      {
        name: '青海',
        value: 1
      },
      {
        name: '新疆',
        value: 1000
      },
      {
        name: '西藏',
        value: 1150
      },
      {
        name: '四川',
        value: 1200
      },
      {
        name: '重庆',
        value: 200
      },
      {
        name: '山东',
        value: 100
      },
      {
        name: '河南',
        value: 100
      },
      {
        name: '江苏',
        value: 200
      },
      {
        name: '安徽',
        value: 1000
      },
      {
        name: '湖北',
        value: 200
      },
      {
        name: '浙江',
        value: 200
      },
      {
        name: '福建',
        value: 200
      },
      {
        name: '江西',
        value: 100
      },
      {
        name: '湖南',
        value: 200
      },
      {
        name: '贵州',
        value: 100
      },
      {
        name: '广西',
        value: 100
      },
      {
        name: '广东',
        value: 100
      },
      {
        name: '海南',
        value: 200
      },
      {
        name: '上海',
        value: 324
      },
      {
        name: '云南',
        value: 100
      },
      {
        name: '台湾',
        value: 900
      }
    ],
    areaNameMap: {
      'heilongjiang': '黑龙江',
      'neimenggu': '内蒙古',
      'jilin': '吉林',
      'beijing': '北京市',
      'liaoning': '辽宁',
      'hebei': '河北',
      'tianjin': '天津',
      'shan1xi': '山西',
      'shan3xi': '陕西',
      'gansu': '甘肃',
      'ningxia': '宁夏',
      'qinghai': '青海',
      'xinjiang': '新疆',
      'xizang': '西藏',
      'sichuan': '四川',
      'chongqing': '重庆',
      'shandong': '山东',
      'henan': '河南',
      'jiangsu': '江苏',
      'anhui': '安徽',
      'hubei': '湖北',
      'zhejiang': '浙江',
      'fujian': '福建',
      'jiangxi': '江西',
      'hunan': '湖南',
      'guizhou': '贵州',
      'guangdong': '广东',
      'guangxi': '广西',
      'hainan': '海南',
      'shanghai': '上海',
      'yunnan': '云南'
    },
    submission: [
      { name: '财政相关部门', count: 10, percent: '0%' },
      { name: '建设相关部门', count: 50, percent: '0%' },
      { name: '治安管理部门', count: 40, percent: '0%' },
      { name: '综合整治部门', count: 30, percent: '0%' },
      { name: '行政监督部门', count: 20, percent: '0%' },
      { name: '经济管理部门', count: 100, percent: '0%' }
    ],
    collection: {
      lv1: 0,
      lv2: 0,
      resourceCount: 0,
      deptCount: 0,
      chartData: [
        ['product', '信息量'],
        ['基础信息', 100],
        ['业务信息', 200],
        ['司法信息', 300],
        ['行政执法信息', 400],
        ['公共事业信息', 550],
        ['信用评级信息', 450],
        ['其他信息', 600],
        ['累计', 350]
      ]
    },
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
    },
    dataExchange: {
      getIn: 0,
      getOut: 0,
      getInCorrect: '0%',
      getOutCorrect: '0%',
      dockedAbnormal: 0,
      dockedNormal: 0,
      chartData: [
        ['product', '归集', '输出'],
        ['1月', 10, 30],
        ['2月', 10, 20],
        ['3月', 20, 10],
        ['4月', 20, 40],
        ['5月', 30, 30],
        ['6月', 30, 10],
        ['7月', 40, 20],
        ['8月', 40, 40],
        ['9月', 20, 20],
        ['10月', 20, 40],
        ['11月', 30, 50],
        ['12月', 10, 60]
      ]
    }
  },
  getters: {},
  actions: {},
  mutations: {}
}

