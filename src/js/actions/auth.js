import { createActions } from './utils'

const actionTypes = {
  AUTHENTICATE_SUCCESS: 'AUTHENTICATE_SUCCESS',
  AUTHENTICATE_FAILURE: 'AUTHENTICATE_FAILURE',
  SIGN_OUT: 'SIGN_OUT',
  SIGN_UP: 'SIGN_UP',
  SIGN_IN: 'SIGN_IN'
}

const actions = createActions(actionTypes)

export { actionTypes, actions }
