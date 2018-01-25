import { takeEvery, put, call, all } from 'redux-saga/effects'
import { actions as recipesActions, actionTypes } from '../actions/recipe'
import { actions as fetchingActions } from '../actions/fetching'
import { loadRecipeDetails } from '../data/api'

const onFetchRecipe = function * (action) {
  const recipeId = action.payload

  yield put(fetchingActions.FETCH_STARTED())

  try {
    const recipe = yield call(loadRecipeDetails, recipeId)
    yield put(recipesActions.FETCH_RECIPE_SUCCESS({ payload: recipe }))
  } catch (error) {
    yield put(recipesActions.FETCH_RECIPE_FAILURE({ error }))
  } finally {
    yield put(fetchingActions.FETCH_FINISHED())
  }
}

export default function * watchRecipe () {
  yield [
    takeEvery(actionTypes.FETCH_RECIPE, onFetchRecipe)
  ]
}