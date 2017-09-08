import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CounterAction} from "../store/action/action";

function mstp(state){
    return {
        count: state.Counter
    }
}



class App extends Component{
    constructor(props){
        super(props);
        this.increament = this.increament.bind(this);
        this.decreament = this.decreament.bind(this);
    }

increament(){
    console.log("increament call")
    this.props.dispatch(CounterAction.increament());
}

decreament(){
    this.props.dispatch(CounterAction.decreament());
}



    render(){
        return(
            <div style={{textAlign:"center"}}>
                {this.props.count}
                <br/>
                <button onClick={this.increament}>increament</button>
                <button onClick={this.decreament}>decreament</button>
            </div>
        );
    }
}

export default connect(mstp)(App);