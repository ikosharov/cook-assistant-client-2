import { actionTypes } from '../actions/auth'

const initialState = {
  id: null,
  username: null,
  token: null,
  authError: null
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SIGN_IN_SUCCESS:
      return { ...action.payload, authError: initialState.authError }

    case actionTypes.SIGN_UP_SUCCESS:
      return { ...action.payload, authError: initialState.authError }

    case actionTypes.SIGN_IN_FAILURE:
      return { state, authError: action.error }

    case actionTypes.SIGN_UP_FAILURE:
      return { state, authError: action.error }

    case actionTypes.SIGN_OUT:
      return initialState

    default:
      return state
  }
}

export const getAuthState = state => state.auth
