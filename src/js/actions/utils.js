import _ from 'lodash'

function createActions (actionTypes) {
  return _.mapValues(actionTypes, (type) => {
    return function (action = {}) {
      const { payload, error, history } = action
      return { type, payload, error, history }
    }
  })
}

export { createActions }
