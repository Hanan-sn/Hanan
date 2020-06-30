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
    ],
    countNumList: [0, 0, 0, 0, 0, 0, 0, 0], // 归集总量
    redList: { signCom: 0, taxpayer: 0, corp: 0, volunteer: 0 }, // 红名单
    blackList: { performed: 0, case: 0, unpaid: 0, lose: 0 }, // 黑名单
    classStatistic: {
      lv1: 8,
      lv2: 40,
      resourceCount: 57,
      deptCount: 55,
      chartData: [
        ['product', '信息量'],
        ['基础信息', 4794115],
        ['业务信息', 1883668],
        ['行政执法信息', 1685166],
        ['政务信息', 2067],
        ['司法信息', 0],
        ['公共事业信息', 0],
        ['信用评级信息', 0],
        ['其他信息', 0]
      ]
    }, // 资源信息分类统计
    trendAnalysis: [
      { product: '1月', count: 0 },
      { product: '2月', count: 0 },
      { product: '3月', count: 0 },
      { product: '4月', count: 0 },
      { product: '5月', count: 0 },
      { product: '6月', count: 0 },
      { product: '7月', count: 0 },
      { product: '8月', count: 0 },
      { product: '9月', count: 0 },
      { product: '10月', count: 0 },
      { product: '11月', count: 0 },
      { product: '12月', count: 0 }
    ],
    submitDeptList: [
      { name: '镇江市', count: 6834299, percent: '78%' },
      { name: '扬中市人社局', count: 1883650, percent: '22%' },
      { name: '市编办', count: 2067, percent: '0%' },
      { name: '市农业农村局', count: 0, percent: '0%' },
      { name: '市教育局', count: 0, percent: '0%' },
      { name: '市卫健委', count: 0, percent: '0%' },
      { name: '市审计局', count: 0, percent: '0%' },
      { name: '市政务服务办', count: 0, percent: '0%' },
      { name: '市市场监督管理局', count: 0, percent: '0%' }
    ],
    evaluateDeptList: [
      { name: '镇江市财政干部培训中心', lv: 'A' },
      { name: '镇江市标准化研究中心', lv: 'A' },
      { name: '镇江消费报社', lv: 'A' },
      { name: '江苏科技大学海洋装备研究院', lv: 'A' },
      { name: '镇江市殡葬管理处', lv: 'A' },
      { name: '镇江市公共信用信息中心', lv: 'A' },
      { name: '长江镇江航道处', lv: 'A' },
      { name: '京口区江苏大学社区卫生服务站', lv: 'A' },
      { name: '镇江市消费者申诉举报受理中心', lv: 'A' },
      { name: '江苏省丹徒中等专业学校', lv: 'A' }
    ],
    servantChartData: [
      { value: 0, name: '行政编制' },
      { value: 0, name: '事业编制' },
      { value: 0, name: '其他' }
    ],
    servantDistributeChartData: {
      inner: [
        { value: 0, name: '总数' }
      ],
      outer: [
        { value: 0, name: '基本信息' },
        { value: 0, name: '业务信息' },
        { value: 0, name: '司法信息' },
        { value: 0, name: '行政执法信息' },
        { value: 0, name: '信用评价信息' },
        { value: 0, name: '公共事业信息' },
        { value: 0, name: '其他信息' }
      ]
    },
    submission: [
      ['product', '信息类别'],
      ['公务员（含参公事业编）基本信息（变更）', 0],
      ['机关单位登记（变更）信息',0],
      ['事业单位登记（变更）信息',0],
      ['事业单位（变更）信息', 0]
    ],
    total: {},
    evaluateDept: [
      ['product', '数量'],
      ['A', 748],
      ['B', 3],
      ['C', 0]
    ],
    submissionList: [
      { name: '机关单位登记（变更）', total: 187, new: 187 },
      { name: '事业单位登记（变更）', total: 0, new: 0 },
      { name: '事业单位评价', total: 753, new: 753 },
      { name: '公务人员基本信息', total: 0, new: 0 }
    ],
  },
  actions: {
    async getAffairData({commit}){
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
