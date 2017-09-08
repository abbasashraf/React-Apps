import {CounterAction} from "../action/action.js"

function Counter(state=0, action){
    switch(action.type){
        case CounterAction.INCREAMENT:
        return state + 1;
        case CounterAction.DECREAMENT:
        return state - 1;
        default:
        return state;
    }
}

export default Counter;