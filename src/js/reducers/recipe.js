import { actionTypes } from '../actions/recipe'
import { createSelector } from "reselect"

const initialState = {
  recipe: undefined,
  error: undefined
}

export default function recipes(state = initialState, {type, payload, error}) {
  switch (type) {
    case actionTypes.FETCH_RECIPE_SUCCESS:
      return { recipe: payload, error: initialState.error }

    case actionTypes.FETCH_RECIPE_FAILURE:
      return { recipe: initialState.recipe, error }

    case actionTypes.SAVE_RECIPE_SUCCESS:
      return { recipe: payload, error: initialState.error }

    case actionTypes.SAVE_RECIPE_FAILURE:
      return { ...state, error }

    case actionTypes.RECIPE_CHANGE:
      const { prop, value } = payload
      let updatedRecipe = {...state.recipe}
      updatedRecipe[prop] = value
      return { recipe: updatedRecipe, error: initialState.error }

    default:
      return state
  }
}

export const getRecipeState = state => state.recipe

export const getRecipe = createSelector(
  getRecipeState,
  (recipe) => recipe.recipe
)
