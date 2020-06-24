// 请求模块
import ajax from './ajax'
// ajax(url:'', data = {}, type = 'GET')
// 默认type = 'GET'
export const reqOverviewData = () => ajax('/overview')

export const reqOverviewUnionData = () => ajax('/overviewUnionData')

export const reqOverviewExchangeData = (params) => {
  let url = params ? '/overviewExchangeData' + params : '/overviewExchangeData'
  return ajax(url)
}
export const reqOverviewCountNumListData = () => ajax('/overviewCountNumListData')
export const reqOverviewRedListData = () => ajax('/overviewRedListData')
export const reqOverviewBlackListData = () => ajax('/overviewBlackListData')
export const reqOverviewClassStatisticData = () => ajax('/overviewClassStatisticData')
export const reqOverviewTrendAnalysisData = () => ajax('/overviewTrendAnalysisData')
export const reqOverviewSubmitDeptListData = () => ajax('/overviewSubmitDeptListData')

export const reqSummaryMonthAnalysisData = () => ajax('/summaryMonthAnalysisData')
export const reqSummaryClassifyStatisticData = () => ajax('/summaryClassifyStatisticData')
export const reqSummaryCountsData = () => ajax('/summaryCountsData')
export const reqSummarySourceData = () => ajax('/summarySourceData')
export const reqSummaryNaturalPersonAnalysisData = () => ajax('/summaryNaturalPersonAnalysisData')
export const reqSummaryNewestFillInDeptData = () => ajax('/summaryNewestFillInDeptData')

export const reqMapData = () => ajax('/map')
export const reqPublicData = () => ajax('/public')
