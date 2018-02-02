import { takeEvery, put, call } from 'redux-saga/effects'
import { actions as imageActions, actionTypes } from '../actions/images'
import { actions as fetchingActions } from '../actions/fetching'
import { uploadImage } from '../data/api'

const onUploadImage = function * (action) {
  const { image, recipeId, stepId, ingredientId } = action.payload

  yield put(fetchingActions.FETCH_STARTED())

  try {
    const { id: imageId } = yield call(uploadImage, image)
    yield put(imageActions.UPLOAD_IMAGE_SUCCESS({ payload: { imageId, recipeId, stepId, ingredientId } }))
  } catch (error) {
    yield put(imageActions.UPLOAD_IMAGE_FAILURE({ error }))
  } finally {
    yield put(fetchingActions.FETCH_FINISHED())
  }

}

export default function * watchImages () {
  yield [
    takeEvery(actionTypes.UPLOAD_IMAGE, onUploadImage)
  ]
}