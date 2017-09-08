import { createStore, applyMiddleware } from 'redux'
import appapp from './reducers'
import createSagaMiddleware from 'redux-saga'
import dataSaga from './saga'

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  let store = createStore(appapp, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(dataSaga)
  return store
}