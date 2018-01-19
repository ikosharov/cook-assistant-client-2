import { createActions } from './utils'

const actionTypes = {
  FETCH_STARTED: 'FETCH_STARTED',
  FETCH_FINISHED: 'FETCH_FINISHED'
}

const actions = createActions(actionTypes)

export { actionTypes, actions }
