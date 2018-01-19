import { createSelector } from 'reselect'
import { actionTypes } from '../actions/recipes'
import { getAuthState } from './auth'
import _ from 'lodash'

const initialState = []

export default function recipes(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_RECIPES_SUCCESS:
      return action.payload

    default:
      return state
  }
}

export const getRecipesState = state => state.recipes

export const getCurrentUserRecipes = createSelector(
  getRecipesState, getAuthState,
  (recipes, auth) => _.uniqBy(recipes.filter(recipe => recipe.userId === auth.id), '_id')
)

export const getOtherUsersRecipes = createSelector(
  getRecipesState,
  getAuthState,
  (recipes, auth) => recipes.filter(recipe => recipe.userId !== auth.id)
)