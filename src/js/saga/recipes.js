import { takeEvery, put, call, all } from 'redux-saga/effects'
import { actions, actionTypes } from '../actions/recipes'
import { loadCurrentUserRecipes, loadAnyUserRecipes } from '../data/api'

const onFetchRecipesRequest = function * () {
  try {
    const [currentUserRecipes, otherUsersRecipes] = yield all([
      call(loadCurrentUserRecipes),
      call(loadAnyUserRecipes)
    ])

    const allRecipes = [...currentUserRecipes, ...otherUsersRecipes]
    yield put(actions.FETCH_RECIPES_RESPONSE(allRecipes))
  } catch (error) {
    console.log('failed fetching users')
  } finally {
    console.log('done')
  }
}

export default function * watchRecipes () {
  yield [
    takeEvery(actionTypes.FETCH_RECIPES_REQUEST, onFetchRecipesRequest)
  ]
}