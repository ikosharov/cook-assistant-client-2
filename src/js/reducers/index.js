import { combineReducers } from 'redux'
import auth from './auth'
import recipes from './recipes'
import fetching from './fetching'

const rootReducer = combineReducers({
  auth,
  recipes,
  fetching
})

export default rootReducer