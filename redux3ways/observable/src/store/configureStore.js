import { createStore, applyMiddleware } from 'redux'
import appapp from './reducers'
import thunk from 'redux-thunk'
import {createEpicMiddleware} from "redux-observable"
import fetchUserEpic from './epic'

const epicMiddleware = createEpicMiddleware(fetchUserEpic)

export default function configureStore() {
  let store = createStore(appapp, applyMiddleware(epicMiddleware))
  return store
}