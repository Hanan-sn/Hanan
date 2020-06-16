import {
  reqOverviewData,
  reqOverviewExchangeData,
  reqOverviewUnionData,
  reqSummaryData,
  reqMapData,
  reqPublicData
} from '../api'
import {
  Overview,
  OverviewExchangeData,
  OverviewUnionData,
  Summary,
  Union,
  Public,
  Map
} from './mutation-types'

export default {
  async getOverviewExchangeData({ commit }, params) {
    const result = await reqOverviewExchangeData(params)
    commit(OverviewExchangeData, { result })
    return result
  },
  async getOverviewUnionData({ commit }) {
    const result = await reqOverviewUnionData()
    commit(OverviewUnionData, { result })
    return result
  }
}
