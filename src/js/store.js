import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
//import { loadState, saveState } from './localStorage'
import rootReducer from './reducers'
import rootSaga from './saga'

export let store

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()

  //const persistedState = loadState()
  store =  createStore(
    rootReducer,
    //persistedState,
    applyMiddleware(sagaMiddleware)
  )

  sagaMiddleware.run(rootSaga)

  // store.subscribe(() => {
  //   saveState({
  //     auth: store.getState().auth
  //   })
  // })

  return store
}
