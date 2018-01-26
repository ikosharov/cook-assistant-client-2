import { actionTypes } from '../actions/recipe'
import { createSelector } from "reselect"

const initialState = {
  recipe: undefined,
  error: undefined
}

export default function recipes(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_RECIPE_SUCCESS:
      return { recipe: action.payload, error: initialState.error }

    case actionTypes.FETCH_RECIPE_FAILURE:
      return { recipe: initialState.recipe, error: action.error }

    case actionTypes.SAVE_RECIPE_SUCCESS:
      return { recipe: action.payload, error: initialState.error }

    case actionTypes.SAVE_RECIPE_FAILURE:
      return { ...state, error: action.error }

    case actionTypes.TITLE_CHANGE:
      return { recipe: { ...state.recipe, title: action.payload }, error: initialState.error }

    default:
      return state
  }
}

export const getRecipeState = state => state.recipe

export const getRecipe = createSelector(
  getRecipeState,
  (recipe) => recipe.recipe
)
