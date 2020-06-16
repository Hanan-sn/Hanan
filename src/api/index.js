// 请求模块
import ajax from './ajax'
// ajax(url:'', data = {}, type = 'GET')
// 默认type = 'GET'
export const reqOverviewData = () => ajax('/overview')

export const reqOverviewExchangeData = (params) => {
  let url = params ? '/overviewExchangeData?' + params : '/overviewExchangeData?thisMonth'
  return ajax(url)
}

export const reqOverviewUnionData = () => ajax('/overviewUnionData')

export const reqOverviewTrendData = () => ajax('/overviewTrendData')

export const reqMapData = () => ajax('/map')
export const reqPublicData = () => ajax('/public')
export const reqSummaryData = () => ajax('/summary')
