import { takeEvery, put, call } from 'redux-saga/effects'
import { actions as authActions, actionTypes } from '../actions/auth'
import { actions as fetchingActions } from '../actions/fetching'
import { signIn, signUp } from '../data/api'

const onSignIn = function * (action) {
  const { history, payload } = action
  const { username, password } = payload

  yield put(fetchingActions.FETCH_STARTED())

  try {
    const { token, id } = yield call(signIn, username, password)
    yield put(authActions.SIGN_IN_SUCCESS({ payload: { id, username, token } }))
    history.push('/recipes')
  } catch (error) {
    yield put(authActions.SIGN_IN_FAILURE({ error }))
  } finally {
    yield put(fetchingActions.FETCH_FINISHED())
  }
}

const onSignUp = function * (action) {
  const { history, payload } = action
  const { username, password } = payload

  yield put(fetchingActions.FETCH_STARTED())

  try {
    const { token, id } = yield call(signUp, username, password)
    yield put(authActions.SIGN_UP_SUCCESS({ payload: { id, username, token } }))
    history.push('/recipes')
  } catch (error) {
    yield put(authActions.SIGN_UP_FAILURE({ error }))
  } finally {
    yield put(fetchingActions.FETCH_FINISHED())
  }
}

const onSignOut = function * (action) {
  const { history } = action

  yield put(fetchingActions.FETCH_STARTED())
  history.push('/signin')
  yield put(fetchingActions.FETCH_FINISHED())
}

export default function * watchAuth () {
  yield [
    takeEvery(actionTypes.SIGN_UP, onSignUp),
    takeEvery(actionTypes.SIGN_IN, onSignIn),
    takeEvery(actionTypes.SIGN_OUT, onSignOut)
  ]
}