import _ from 'lodash'

function createActions (actionTypes) {
  return _.mapValues(actionTypes, (actionType) => {
    return function (payload) {
      return { actionType, payload }
    }
  })
}

export { createActions }
