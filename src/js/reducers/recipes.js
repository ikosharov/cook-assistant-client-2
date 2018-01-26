import { createSelector } from 'reselect'
import { actionTypes } from '../actions/recipes'
import { getAuthState } from './auth'
import _ from 'lodash'

const initialState = {
  recipes: [],
  error: null
}

export default function recipes(state = initialState, {type, payload, error}) {
  switch (type) {
    case actionTypes.FETCH_RECIPES_SUCCESS:
      return { recipes: payload, error: initialState.error }

    case actionTypes.FETCH_RECIPES_FAILURE:
      return { recipes: initialState.recipes, error }

    default:
      return state
  }
}

export const getRecipesState = state => state.recipes

export const getAllRecipes = createSelector(
  getRecipesState,
  (recipes) => recipes.recipes
)

export const getCurrentUserRecipes = createSelector(
  getAllRecipes, getAuthState,
  (recipes, auth) => _.uniqBy(recipes.filter(recipe => recipe.userId === auth.id), '_id')
)

export const getOtherUsersRecipes = createSelector(
  getAllRecipes,
  getAuthState,
  (recipes, auth) => recipes.filter(recipe => recipe.userId !== auth.id)
)