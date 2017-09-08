


export class CounterAction {
    static INCREAMENT = "INCREAMENT";
    static DECREAMENT = "DECREAMENT";


    static increament() {
        return {

            type: CounterAction.INCREAMENT
        }
    }

    static decreament() {
        return {
            type: CounterAction.DECREAMENT
        }
    }


}