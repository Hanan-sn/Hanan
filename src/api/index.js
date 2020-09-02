// 请求模块
import ajax from './ajax'
// ajax(url:'', data = {}, type = 'GET')
// 默认type = 'GET'
export const reqOverviewData = () => ajax('/overviewData')
export const reqOverviewDataExchange = (params) => ajax('/overviewDataExchange' + '?' + params)
export const reqOverviewReport = (params) => ajax('/overviewOverviewReport' + '?' + params)
export const reqOverviewUnion = () => ajax('/overviewUnion')
export const reqOverviewRB = () => ajax('/overviewRB')
export const reqOverviewClassify = () => ajax('/overviewClassify')
export const reqOverviewBag = () => ajax('/overviewBag')
export const reqOverviewAggregateData = () => ajax('/overviewAggregateData')

export const reqUnionData = () => ajax('/unionData')

export const reqMapData = () => ajax('/mapData')

export const reqPublicData = () => ajax('/publicData')

export const reqSummaryData = () => ajax('/summaryData')
