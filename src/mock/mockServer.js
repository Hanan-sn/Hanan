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
      collection: 20,
      appear: 30,
      reflux: 40
    }
  }
)
Mock.setup({ timeout: '1-200' })
