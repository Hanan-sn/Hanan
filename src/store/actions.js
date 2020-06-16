import {
  reqOverviewData,
  reqOverviewExchangeData,
  reqUnionData,
  reqSummaryData,
  reqMapData,
  reqPublicData
} from '../api'
import {
  Overview,
  OverviewExchangeData,
  Summary,
  Union,
  Public,
  Map
} from './mutation-types'

export default {
  async getOverview({ commit }, cb) {
    const result = await reqOverviewData()
    commit(Overview, { result })
    typeof cb === 'function' && cb()
  },
  async getOverviewExchangeData({ commit }, cb) {
    const result = await reqOverviewExchangeData()
    commit(OverviewExchangeData, { result })
    typeof cb === 'function' && cb()
    return result
  },
  async getSummary({ commit }, cb) {
    const result = await reqSummaryData()
    commit(Summary, { result })
    typeof cb === 'function' && cb()
  },
  async getUnion({ commit }, cb) {
    const result = await reqUnionData()
    commit(Union, { result })
    typeof cb === 'function' && cb()
  },
  async getPublic({ commit }, cb) {
    const result = await reqPublicData()
    commit(Public, { result })
    typeof cb === 'function' && cb()
  },
  async getMap({ commit }, cb) {
    const result = await reqMapData()
    commit(Map, { result })
    typeof cb === 'function' && cb()
  }
}
