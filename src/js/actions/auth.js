import { createActions } from './utils'

const actionTypes = {
  SIGN_IN: 'SIGN_IN',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE: 'SIGN_IN_FAILURE',
  SIGN_UP: 'SIGN_UP',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE: 'SIGN_UP_FAILURE',
  SIGN_OUT: 'SIGN_OUT',
  USERNAME_CHANGE: 'USERNAME_CHANGE',
  PASSWORD_CHANGE: 'PASSWORD_CHANGE'
}

const actions = createActions(actionTypes)

export { actionTypes, actions }
