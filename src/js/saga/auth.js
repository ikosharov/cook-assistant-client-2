import { takeEvery, put, call } from 'redux-saga/effects'
import { actions, actionTypes } from '../actions/auth'
import { signIn, signUp } from '../data/api'

const onSignIn = function * (action) {
  const { history, payload } = action
  const { username, password } = payload

  try {
    const { token, id } = yield call(signIn, username, password)
    yield put(actions.AUTHENTICATE_SUCCESS({ id, username, token }))
    history.push('/recipes')
  } catch (error) {
    yield put(actions.AUTHENTICATE_FAILURE({ username }))
  } finally {
    console.log('done')
  }
}

const onSignUp = function * (action) {
  const { history, payload } = action
  const { username, password } = payload

  try {
    const { token, id } = yield call(signUp, username, password)
    yield put(actions.AUTHENTICATE_SUCCESS({ id, username, token }))
    history.push('/recipes')
  } catch (error) {
    yield put(actions.AUTHENTICATE_FAILURE({ username }))
  } finally {
    console.log('done')
  }
}

const onSignOut = function * (action) {
  const { history } = action
  history.push('/signin')
}

export default function * watchAuth () {
  yield [
    takeEvery(actionTypes.SIGN_UP, onSignUp),
    takeEvery(actionTypes.SIGN_IN, onSignIn),
    takeEvery(actionTypes.SIGN_OUT, onSignOut)
  ]
}