import { createStore, applyMiddleware } from 'redux'
import appapp from './reducers'
import thunk from 'redux-thunk'

export default function configureStore() {
  let store = createStore(appapp, applyMiddleware(thunk))
  return store
}