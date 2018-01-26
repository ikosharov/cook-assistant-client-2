import { actionTypes } from '../actions/auth'

const initialState = {
  id: null,
  username: null,
  token: null,
  error: null
}

export default function auth(state = initialState, {type, payload, error}) {
  switch (type) {
    case actionTypes.SIGN_IN_SUCCESS:
      return { ...payload, error: initialState.error }

    case actionTypes.SIGN_UP_SUCCESS:
      return { ...payload, error: initialState.error }

    case actionTypes.SIGN_IN_FAILURE:
      return { ...state, error }

    case actionTypes.SIGN_UP_FAILURE:
      return { ...state, error }

    case actionTypes.SIGN_OUT:
      return initialState

    default:
      return state
  }
}

export const getAuthState = state => state.auth
