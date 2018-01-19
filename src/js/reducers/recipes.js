import { createSelector } from 'reselect'
import { actionTypes } from '../actions/recipes'
import { getAuthState } from './auth'

const initialState = []

export default function recipes(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_RECIPES_RESPONSE:
      return action.payload

    default:
      return state
  }
}

export const getRecipesState = state => state.recipes

export const getCurrentUserRecipes = createSelector(
  getRecipesState, getAuthState,
  (recipes, auth) => recipes.filter(recipe => recipe.userId === auth.id)
)

export const getOtherUsersRecipes = createSelector(
  getRecipesState,
  getAuthState,
  (recipes, auth) => recipes.filter(recipe => recipe.userId !== auth.id)
)