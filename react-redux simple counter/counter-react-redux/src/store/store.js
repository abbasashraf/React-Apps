import {createStore, combineReducers} from 'redux';
import Counter from "../store/reducer/reducer.js"


var reducer = combineReducers({
    Counter

})




export var store = createStore(reducer);