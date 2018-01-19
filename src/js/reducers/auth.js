import { actionTypes } from '../actions/auth'
import { createSelector } from "reselect"

const initialState = {
  id: null,
  username: null,
  token: null,
  authenticateFailed: false
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case actionTypes.AUTHENTICATE_SUCCESS:
      return { ...action.payload, authenticateFailed: false }

    case actionTypes.AUTHENTICATE_FAILURE:
      const { username } = action.payload
      return { ...initialState, username, authenticateFailed: true }

    case actionTypes.SIGN_OUT:
      return initialState

    default:
      return state
  }
}

export const getAuthState = state => state.auth
