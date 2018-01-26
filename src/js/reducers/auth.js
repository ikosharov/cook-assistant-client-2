import { actionTypes } from '../actions/auth'

const initialState = {
  id: undefined,
  username: undefined,
  password: undefined,
  token: undefined,
  error: undefined
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

    case actionTypes.USERNAME_CHANGE:
      return { ...state, username: payload }

    case actionTypes.PASSWORD_CHANGE:
      return { ...state, password: payload }

    default:
      return state
  }
}

export const getAuthState = state => state.auth
