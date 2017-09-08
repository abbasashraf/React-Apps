import {TodoAction} from '../action/action.js'

const todo = (action)=>{
    let {text} = action ;
    return {
        text
    }
}


export var TodoReducer = (state=[],action)=>{
    let todos = null;
    switch (action.type){
        case TodoAction.ADDTODO:
        //console.log('todo state', state)
        todos = [...state, todo(action)];
        return todo;
        default:
        return state
    }

}