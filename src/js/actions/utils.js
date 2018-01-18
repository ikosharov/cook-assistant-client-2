import _ from 'lodash'

function createActions (actionTypes) {
  return _.mapValues(actionTypes, (actionType) => {
    return function (payload, history) {
      return { type: actionType, payload, history }
    }
  })
}

export { createActions }
