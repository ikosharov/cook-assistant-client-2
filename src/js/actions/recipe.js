import { createActions } from './utils'

const actionTypes = {
  FETCH_RECIPE: 'FETCH_RECIPE',
  FETCH_RECIPE_SUCCESS: 'FETCH_RECIPE_SUCCESS',
  FETCH_RECIPE_FAILURE: 'FETCH_RECIPE_FAILURE'
}

const actions = createActions(actionTypes)

export { actionTypes, actions }
