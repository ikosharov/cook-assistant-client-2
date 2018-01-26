import { takeEvery, put, call } from 'redux-saga/effects'
import { actions as recipesActions, actionTypes } from '../actions/recipe'
import { actions as fetchingActions } from '../actions/fetching'
import { loadRecipe, editRecipe } from '../data/api'

const onFetchRecipe = function * (action) {
  const recipeId = action.payload

  yield put(fetchingActions.FETCH_STARTED())

  try {
    const recipe = yield call(loadRecipe, recipeId)
    yield put(recipesActions.FETCH_RECIPE_SUCCESS({ payload: recipe }))
  } catch (error) {
    yield put(recipesActions.FETCH_RECIPE_FAILURE({ error }))
  } finally {
    yield put(fetchingActions.FETCH_FINISHED())
  }
}

const onSaveRecipe = function * (action) {
  const { recipeId, recipe } = action.payload

  yield put(fetchingActions.FETCH_STARTED())

  try {
    yield call(editRecipe, recipeId, recipe)
    yield put(recipesActions.SAVE_RECIPE_SUCCESS({ payload: recipe }))
  } catch (error) {
    yield put(recipesActions.SAVE_RECIPE_FAILURE({ error }))
  } finally {
    yield put(fetchingActions.FETCH_FINISHED())
  }

}

export default function * watchRecipe () {
  yield [
    takeEvery(actionTypes.FETCH_RECIPE, onFetchRecipe),
    takeEvery(actionTypes.SAVE_RECIPE, onSaveRecipe)
  ]
}