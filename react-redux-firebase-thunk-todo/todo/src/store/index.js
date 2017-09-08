import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
// import {createLogger} from 'redux-logger';
import {TodoReducer} from './reducers/reducer';
//const logger = createLogger();


const root = combineReducers({
    TodoReducer
})

const middle = applyMiddleware(thunk)
export const store = createStore(root, middle);