export class TodoAction {
    static ADDTODO = "ADDTODO";


    static addTodo(text){
        const action = {
            type: TodoAction.ADDTODO,
            text
        }
        console.log("action in tod", action)
        return action 
    }
}