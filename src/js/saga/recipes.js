import { takeEvery, put, call, all } from 'redux-saga/effects'
import { actions as recipesActions, actionTypes } from '../actions/recipes'
import { actions as fetchingActions } from '../actions/fetching'
import { loadCurrentUserRecipes, loadAnyUserRecipes } from '../data/api'

const onFetchRecipes = function * () {
  yield put(fetchingActions.FETCH_STARTED())

  try {
    const [currentUserRecipes, otherUsersRecipes] = yield all([
      call(loadCurrentUserRecipes),
      call(loadAnyUserRecipes)
    ])

    const allRecipes = [...currentUserRecipes, ...otherUsersRecipes]
    yield put(recipesActions.FETCH_RECIPES_SUCCESS({ payload: allRecipes }))
  } catch (error) {
    yield put(recipesActions.FETCH_RECIPES_FAILURE({ error }))
  } finally {
    yield put(fetchingActions.FETCH_FINISHED())
  }
}

export default function * watchRecipes () {
  yield [
    takeEvery(actionTypes.FETCH_RECIPES, onFetchRecipes)
  ]
}