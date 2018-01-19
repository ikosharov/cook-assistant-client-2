import { createActions } from './utils'

const actionTypes = {
  FETCH_RECIPES_REQUEST: 'FETCH_RECIPES_REQUEST',
  FETCH_RECIPES_RESPONSE: 'FETCH_RECIPES_RESPONSE'
}

const actions = createActions(actionTypes)

export { actionTypes, actions }
