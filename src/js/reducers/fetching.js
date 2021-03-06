import { actionTypes } from '../actions/fetching'

const initialState = false

export default function fetching(state = initialState, {type}) {
  switch (type) {
    case actionTypes.FETCH_STARTED:
      return true

    case actionTypes.FETCH_FINISHED:
      return false

    default:
      return state
  }
}
