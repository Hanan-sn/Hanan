import Mock from 'mockjs'
// import data from './data.json'
// import data_nav from './data_nav.json'
// import home_data from './home_data.json'
// import shiwutuijian_data from './shiwutuijian_data.json'
// import shiwu_data from './shiwu_data.json'
// import shouye_data from './shouye_data.json'
import data from './json/mockG2'

// 返回data的接口

/*
Mock.mock(
  '/overviewDataExchange?2020-06-01',
  {
    code: 0, data: {
      getIn: 10,
      getOut: 10,
      getInCorrect: '0%',
      getOutCorrect: '0%',
      dockedAbnormal: 0,
      dockedNormal: 0,
      chartData: [
        ['product', '归集', '输出'],
        ['1月', 120, 95],
        ['2月', 83.1, 73.4],
        ['3月', 86.4, 65.2],
        ['4月', 72.4, 53.9],
        ['5月', 72.4, 53.9],
        ['6月', 72.4, 53.9],
        ['7月', 72.4, 53.9],
        ['8月', 72.4, 53.9],
        ['9月', 72.4, 53.9],
        ['10月', 72.4, 53.9],
        ['11月', 72.4, 53.9],
        ['12月', 72.4, 53.9]
      ]
    }
  })
*/

Mock.mock(
  '/summaryData',
  {
    data: data
  }
)
