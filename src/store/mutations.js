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
    state.map = data
  },
  [Union](state, { result }) {
    const { data } = result
    state.union = data
  },
  [Summary](state, { result }) {
    const { data } = result
    state.summary = data
  },
  [Public](state, { result }) {
    const { data } = result
    state.public = data
  },
  [OverviewExchangeData](state, { result }) {
    const { data } = result
    state.exchangeData = data
  },
  [OverviewUnionData](state, { result }) {
    const { data } = result
    state.union = data
  }
}
