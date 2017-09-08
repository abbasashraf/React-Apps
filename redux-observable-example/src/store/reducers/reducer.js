import ActionOne from '../action/action.js'
// store ki state es functin k pehly argument m likhy gey koi b variable dey kar, 
// koi b naam rakh sakty hain , yahe vakue map state ti props k function m jaye gi

function newf(value= 0, action){
    switch(action.type){
      case ActionOne.one:
      return value +1 ;
    //   case "two":
    //   return " i am not a terrorist";
      case ActionOne.two:
      return value - 1;
      case ActionOne.three:
      return value + action.value
      default:
      return value ;

    }
}

export default newf;

