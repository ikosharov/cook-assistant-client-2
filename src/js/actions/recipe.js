import { createActions } from './utils'

const actionTypes = {
  FETCH_RECIPE: 'FETCH_RECIPE',
  FETCH_RECIPE_SUCCESS: 'FETCH_RECIPE_SUCCESS',
  FETCH_RECIPE_FAILURE: 'FETCH_RECIPE_FAILURE',
  SAVE_RECIPE_SUCCESS: 'SAVE_RECIPE_SUCCESS',
  SAVE_RECIPE_FAILURE: 'SAVE_RECIPE_FAILURE',
  SAVE_RECIPE: 'SAVE_RECIPE',
  RECIPE_CHANGE: 'RECIPE_CHANGE'
}

const actions = createActions(actionTypes)

export { actionTypes, actions }
