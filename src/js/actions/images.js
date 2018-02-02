import { createActions } from './utils'

const actionTypes = {
  UPLOAD_IMAGE: 'UPLOAD_IMAGE',
  UPLOAD_IMAGE_SUCCESS: 'UPLOAD_IMAGE_SUCCESS',
  UPLOAD_IMAGE_FAILURE: 'UPLOAD_IMAGE_FAILURE'
}

const actions = createActions(actionTypes)

export { actionTypes, actions }
