import {createStore} from 'redux';
import newf from './reducers/reducer';
import {combineReducer, applyMiddleware} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import CounterEpic from './epic/counterEpic';


export const rootEpic = combineEpics(
    CounterEpic.incrementWithValue
)
const epicMiddleware = createEpicMiddleware(rootEpic)

const createStoreMiddleWare = applyMiddleware(epicMiddleware);
let store = createStore(newf, createEpicMiddleware);


store.subscribe(()=> 
console.log(store.getState())
)

export default store;