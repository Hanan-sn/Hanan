import Mock from 'mockjs'
// import data from './data.json'
// import data_nav from './data_nav.json'
// import home_data from './home_data.json'

// 返回data的接口
Mock.mock('/overview', {
  code: 0,
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
Mock.mock(
  '/overviewExchangeData',
  'GET',
  options => {
    console.log(options)
  }
)
Mock.mock(
  '/overviewUnion',
  {
    code: 1,
    data: {
      memoCount: 0,
      measureCount: 0,
      deptCount: 0,
      pieData: {
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
  '/overviewRedBlackList',
  {
    code: 2,
    data: {
      redList: { signCom: 4456, taxpayer: 7413, corp: 1142, volunteer: 5541 },
      blackList: { performed: 236, case: 713, unpaid: 112, lose: 141 }
    }
  }
)
Mock.setup({ timeout: 2000 })
