import {
  Overview,
  OverviewExchangeData,
  OverviewUnionData,
  Map,
  Union,
  Summary,
  Public
} from './mutation-types'

export default {
  [Overview](state, { result }) {
    const { data } = result
    state.overview = data
  },
  [Map](state, { result }) {
    const { data } = result
    state.map = map
  },
  [Union](state, { result }) {
    const { data } = result
    state.union = union
  },
  [Summary](state, { result }) {
    const { data } = result
    state.summary = summary
  },
  [Public](state, { result }) {
    const { data } = result
    state.public = publicState
  },
  [OverviewExchangeData](state, { result }) {
    const { data } = result
    state.exchangeData = JSON.parse(JSON.stringify(data))
  },
  [OverviewUnionData](state, { result }) {
    const { data } = result
    state.union = JSON.parse(JSON.stringify(data))
  }
}
