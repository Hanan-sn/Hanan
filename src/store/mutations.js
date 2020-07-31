import {
  Overview,
  Summary
} from './mutation-types'

export default {
  [Summary](state, { result }) {
    const {summary} = result
    state.summary = summary
  }
}
