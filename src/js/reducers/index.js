import { combineReducers } from 'redux'
import auth from './auth'
import recipes from './recipes'
import fetching from './fetching'
import recipe from './recipe'

const rootReducer = combineReducers({
  auth,
  recipes,
  fetching,
  recipe
})

export default rootReducer