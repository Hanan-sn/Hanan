import {
  Overview,
  OverviewExchangeData,
  Map,
  Union,
  Summary,
  Public
} from './mutation-types'

export default {
  [Overview](state, { result }) {
    const {data} = result
    state.overview = data
  },
  [Map](state, { result }) {
    const {data} = result
    state.map = map
  },
  [Union](state, { result }) {
    const {data} = result
    state.union = union
  },
  [Summary](state, { result }) {
    const {data} = result
    state.summary = summary
  },
  [Public](state, { result }) {
    const {data} = result
    state.public = publicState
  },
  [OverviewExchangeData](state, {result}){
    const {data} = result
    let copy = JSON.parse(JSON.stringify(state.overview))
    copy.exchangeData = data.exchangeData
    state.overview = JSON.parse(JSON.stringify(copy))
  }
}
