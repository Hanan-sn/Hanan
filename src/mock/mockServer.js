import Mock from 'mockjs'
// import data from './data.json'
// import data_nav from './data_nav.json'
// import home_data from './home_data.json'
// import shiwutuijian_data from './shiwutuijian_data.json'
// import shiwu_data from './shiwu_data.json'
// import shouye_data from './shouye_data.json'

// 返回data的接口
Mock.mock('/overview', {
  code: 1,
  data: {
    countNumList: [1, 0, 0, 0, 4, 0, 6, 0],
    union: {
      memoCount: 6666,
      measureCount: 7777,
      deptCount: 400,
      pieData: {
        inner: [
          { value: 1100, name: '惩戒' },
          { value: 2000, name: '激励' }
        ],
        outer: [
          { value: 400, name: '法人惩戒' },
          { value: 600, name: '自然人惩戒' },
          { value: 1400, name: '法人激励' },
          { value: 600, name: '自然人激励' }
        ]
      }
    },
    dataExchange: {
      // total: 8848,
      getIn: 5480,
      getInCorrect: '60%',
      getOut: 5480,
      getOutCorrect: '40%',
      dockedNormal: 320,
      dockedAbnormal: 70,
      barData: [
        ['product', '归集', '输出'],
        ['1月', 100, 120],
        ['2月', 100, 120],
        ['3月', 100, 120],
        ['4月', 100, 120],
        ['5月', 100, 120],
        ['6月', 100, 120],
        ['7月', 100, 120],
        ['8月', 100, 120],
        ['9月', 100, 120],
        ['10月', 100, 120],
        ['11月', 100, 120],
        ['12月', 100, 120]
      ]
    },
    rotateData: [
      {
        name: '自然人基础信息',
        value: '264531'
      },
      {
        name: '自然人人均数量',
        value: '14'
      },
      {
        name: '法人人均数量',
        value: '16'
      },
      {
        name: '法人信用信息',
        value: '23655'
      },
      {
        name: '自然人信用信息',
        value: '36542'
      },
      {
        name: '法人基础信息',
        value: '32456'
      }
    ],
    redList: { signCom: 4456, taxpayer: 7413, corp: 1142, volunteer: 5541 },
    blackList: { performed: 236, case: 713, unpaid: 112, lose: 141 }
  }
})
Mock.mock('/overviewUnionData', {
  code: 1,
  data: {
      memoCount: 6666,
      measureCount: 7777,
      deptCount: 400,
      pieData: {
        inner: [
          { value: 1100, name: '惩戒' },
          { value: 2000, name: '激励' }
        ],
        outer: [
          { value: 400, name: '法人惩戒' },
          { value: 600, name: '自然人惩戒' },
          { value: 1400, name: '法人激励' },
          { value: 600, name: '自然人激励' }
        ]
      }
    }
})
Mock.mock('/overviewExchangeData', {
  code: 1,
  data: {
    // total: 8848,
    getIn: 5480,
    getInCorrect: '60%',
    getOut: 5480,
    getOutCorrect: '40%',
    dockedNormal: 320,
    dockedAbnormal: 70,
    chartData: [
      ['product', '归集', '输出'],
      ['1月', 100, 190],
      ['2月', 120, 170],
      ['3月', 130, 150],
      ['4月', 140, 130],
      ['5月', 150, 110],
      ['6月', 160, 120],
      ['7月', 170, 130],
      ['8月', 180, 140],
      ['9月', 190, 150],
      ['10月', 170, 160],
      ['11月', 150, 150],
      ['12月', 130, 140]
    ]
  }
})
Mock.mock('/overviewCountNumListData', {
  code: 1,
  data: [1, 0, 0, 0, 4, 0, 6, 0]
})
Mock.mock('/overviewRedListData', {
  code: 1,
  data: { signCom: 4456, taxpayer: 7413, corp: 1142, volunteer: 5541 }
})
Mock.mock('/overviewBlackListData', {
  code: 1,
  data: { performed: 0, case: 0, unpaid: 0, lose: 0 }
})
Mock.mock('/overviewClassStatisticData', {
  code: 1,
  data: {
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
  }
})
Mock.mock('/overviewTrendAnalysisData', {
  code: 1,
  data: [
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
  ]
})
Mock.mock('/overviewSubmitDeptListData', {
  code: 1,
  data: [
    { name: '镇江市', count: 6834299, percent: '78%' },
    { name: '扬中市人社局', count: 1883650, percent: '22%' },
    { name: '市编办', count: 2067, percent: '0%' },
    { name: '市农业农村局', count: 0, percent: '0%' },
    { name: '市教育局', count: 0, percent: '0%' },
    { name: '市卫健委', count: 0, percent: '0%' },
    { name: '市审计局', count: 0, percent: '0%' },
    { name: '市政务服务办', count: 0, percent: '0%' },
    { name: '市市场监督管理局', count: 0, percent: '0%' }
  ]
})

Mock.mock(
  '/overviewExchangeData?thisMonth',
  {
    code: 1,
    data: {
      // total: 8848,
      getIn: 4480,
      getInCorrect: '60%',
      getOut: 4480,
      getOutCorrect: '40%',
      dockedNormal: 120,
      dockedAbnormal: 80,
      chartData: [
        ['product', '归集', '输出'],
        ['1月', 100, 120],
        ['2月', 100, 120],
        ['3月', 100, 120],
        ['4月', 100, 120],
        ['5月', 100, 120],
        ['6月', 100, 120],
        ['7月', 100, 120],
        ['8月', 100, 120],
        ['9月', 100, 120],
        ['10月', 100, 120],
        ['11月', 100, 120],
        ['12月', 100, 120]
      ]
    }
  }
)
Mock.mock(
  '/overviewExchangeData?thisYear',
  {
    code: 0,
    data: {
      // total: 8848,
      getIn: 5480,
      getInCorrect: '50%',
      getOut: 5480,
      getOutCorrect: '50%',
      dockedNormal: 220,
      dockedAbnormal: 70,
      chartData: [
        ['product', '归集', '输出'],
        ['1月', 110, 120],
        ['2月', 110, 120],
        ['3月', 110, 120],
        ['4月', 110, 120],
        ['5月', 110, 120],
        ['6月', 110, 120],
        ['7月', 110, 120],
        ['8月', 110, 120],
        ['9月', 110, 120],
        ['10月', 110, 120],
        ['11月', 110, 120],
        ['12月', 110, 120]
      ]
    }
  }
)
Mock.mock(
  '/overviewUnionData',
  {
    code: 1,
    data: {
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
    }
  }
)

Mock.mock(
  '/overviewRedBlackList',
  {
    code: 2,
    data: {
      redList: { signCom: 4456, taxpayer: 7413, corp: 1142, volunteer: 5541 },
      blackList: { performed: 236, case: 713, unpaid: 112, lose: 141 }
    }
  }
)

Mock.mock(
  '/summaryMonthAnalysisData',
  {
    code: 200,
    data: {
      collection: 20,
      appear: 30,
      reflux: 40
    }
  }
)
Mock.mock(
  '/summaryClassifyStatisticData',
  {
    code: 200,
    data: {
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
    }
  }
)
Mock.mock(
  '/summaryCountsData',
  {
    code: 200,
    data: {
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
    }
  }
)
Mock.mock(
  '/summarySourceData',
  {
    code: 200,
    data: [
      ['product','数据来源'],
      ['手工填报',10],
      ['et对接',5],
      ['内部接口',15],
      ['其他',25]
    ]
  }
)
Mock.mock(
  '/summaryNaturalPersonAnalysisData',
  {
    code: 200,
    data: [
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
    ]
  }
)
Mock.mock(
  '/summaryNewestFillInDeptData',
  {
    code: 200,
    data: [
      { name: '部门名称一', count: 8848, percent: 10 },
      { name: '部门名称一', count: 8848, percent: 10 },
      { name: '部门名称一', count: 8848, percent: 10 },
      { name: '部门名称一', count: 8848, percent: 10 },
      { name: '部门名称一', count: 8848, percent: 10 }
    ]
  }
)
Mock.setup({ timeout: '1-200' })
