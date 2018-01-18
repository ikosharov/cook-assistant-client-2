import { takeEvery, put, call } from 'redux-saga/effects'
import { actionTypes } from '../actions/auth'

const onSignUp = function * (action) {
  console.log('watch sign up')
}

const onSignIn = function * (action) {
  console.log('watch sign in')
}

const onSignOut = function * () {
  console.log('watch sign out')
}

export default function * watchAuth () {
  yield [
    takeEvery(actionTypes.SIGN_UP, onSignUp),
    takeEvery(actionTypes.SIGN_IN, onSignIn),
    takeEvery(actionTypes.SIGN_OUT, onSignOut)
  ]
}