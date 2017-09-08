export default class ActionOne{

    static one = "one";
    static two = "two";
    static three = "three";

    static one(){
        return {
            type: 'one'
        }
    }

    static two(){
        return{
            type: 'two'
        }
    }

    static three(){
        return{
            type: 'three'
        }
    }

}