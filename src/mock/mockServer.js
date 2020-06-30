import Mock from 'mockjs'
// import data from './data.json'
// import data_nav from './data_nav.json'
// import home_data from './home_data.json'
// import shiwutuijian_data from './shiwutuijian_data.json'
// import shiwu_data from './shiwu_data.json'
// import shouye_data from './shouye_data.json'

// 返回data的接口
Mock.mock(
  '/overviewData',
  {
    code: 200,
    data: {
      union: {
        memoCount: 2,
        measureCount: 44,
        deptCount: 55,
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
      },
      exchangeData: {
        // total: 8848,
        getIn: 0,
        getInCorrect: '0%',
        getOut: 0,
        getOutCorrect: '0%',
        dockedNormal: 79,
        dockedAbnormal: 1,
        chartData: [
          ['product', '归集', '输出'],
          ['6月', 4497783, 0]
        ]
      },
      countNumList: [0, 8, 7, 2, 0, 0, 1, 6],
      redList: { signCom: 0, taxpayer: 0, corp: 0, volunteer: 1 },
      blackList: { performed: 0, case: 0, unpaid: 0, lose: 1 },
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
      },
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
    }
  }
)
Mock.mock(
  '/publicData',
  {
    code: 200,
    data: {
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
        ['1天', 10],
        ['2天', 12],
        ['3天', 13],
        ['4天', 14],
        ['5天', 15],
        ['6天', 16],
        ['7天', 15],
      ],
      collectionSituation: [
        ['product', '行政许可', '行政处罚'],
        ['6月', 12000, 12050],
        ['7月', 13000, 15420],
        ['8月', 12000, 11000]
      ],
      repair: [
        ['product', '数量'],
        ['1月', 10],
        ['2月', 20],
        ['3月', 30],
        ['4月', 40],
        ['5月', 50],
        ['6月', 60],
        ['7月', 70],
        ['8月', 60],
        ['9月', 50],
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
        adminPunish: 20
      }
    }
  }
)
Mock.mock(
  '/summaryData',
  {
    code: 200,
    data: {
      monthAnalysis: {
        collection: 1,
        appear: 0,
        reflux: 0
      },
      classifyStatistic: {
        lv1: 0,
        lv2: 0,
        resourceCount: 0,
        deptCount: 0,
        chartData: [
          ['product', '信息量'],
          ['基础信息', 80],
          ['业务信息', 100],
          ['司法信息', 20],
          ['行政执法信息', 300],
          ['公共事业信息', 400],
          ['信用评级信息', 500],
          ['其他信息', 600],
          ['累计', 700]
        ],
        deptList: [
          { name: '部门名称一', count: 8848, percent: 10 },
          { name: '部门名称一', count: 8848, percent: 10 },
          { name: '部门名称一', count: 8848, percent: 10 },
          { name: '部门名称一', count: 8848, percent: 10 },
          { name: '部门名称一', count: 8848, percent: 10 },
          { name: '部门名称一', count: 8848, percent: 10 },
          { name: '部门名称一', count: 8848, percent: 10 }
        ]
      },
      summaryCounts: {
        resource: 0,
        collection: 0,
        month: 0,
        naturalPerson: 0,
        legalPerson: 0,
        focusPerson: 0,
        passPercent: 80,
        chartList: [
          ['product','奖','惩'],
          ['1月',1000,500],
          ['2月',1400,600],
          ['3月',2000,700],
          ['4月',1500,500],
          ['5月',1200,400],
          ['6月',1300,500],
          ['7月',1400,600],
          ['8月',2000,500],
          ['9月',2200,300],
          ['10月',1600,500],
          ['11月',1700,600],
          ['12月',1400,400],
        ]
      },
      source:[
        ['product','数据来源'],
        ['手工填报',10],
        ['et对接',5],
        ['内部接口',15],
        ['其他',25]
      ],
      naturalPersonAnalysis: [
        {
          outer: [
            { value: 335, name: '业务信息' },
            { value: 310, name: '司法信息' },
            { value: 234, name: '行政执法信息' },
            { value: 235, name: '信用评价信息' },
            { value: 248, name: '公共事业信息' },
            { value: 248, name: '其他信息' },
            { value: 248, name: '基本信息' }
          ],
          inner: [
            { value: 535, name: '直接访问' }
          ]
        },
        {
          outer: [
            { value: 365, name: '业务信息' },
            { value: 340, name: '司法信息' },
            { value: 264, name: '行政执法信息' },
            { value: 225, name: '信用评价信息' },
            { value: 218, name: '公共事业信息' },
            { value: 228, name: '其他信息' },
            { value: 218, name: '基本信息' }
          ],
          inner: [
            { value: 635, name: '直接访问' }
          ]
        }
      ],
      newestFillInDept: [
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 }
      ]
    },
  }
)
Mock.mock(
  '/unionData',
  {
    code: 200,
    data: {
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
        ['4月', 1100],
        ['5月', 400],
        ['6月', 500]
      ]
    }
  }
)
Mock.mock(
  '/affairData',
  {
    code: 200,
    data: {
      civil: 100,
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
      countNumList: [0, 8, 7, 2, 0, 0, 1, 6], // 归集总量
      redList: { signCom: 1, taxpayer: 2, corp: 3, volunteer: 4 }, // 红名单
      blackList: { performed: 1, case: 2, unpaid: 3, lose: 4 }, // 黑名单
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
        ['公务员（含参公事业编）基本信息（变更）', 20],
        ['机关单位登记（变更）信息', 30],
        ['事业单位登记（变更）信息', 40],
        ['事业单位（变更）信息', 50]
      ],
      total: {
        resource: 136,
        civil: 116,
        dept: 101
      },
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
      ]
    }
  }
)
Mock.setup({ timeout: '1-200' })
