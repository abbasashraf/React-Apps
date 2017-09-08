import React, { Component } from 'react';
import logo from './../../logo.svg';
import './../../App.css';
import {connect} from 'react-redux';

// store ki state is state m arahi hai from index.js
function MSTP(state){

  return {

    // is state ki waja se state update hoti rahy gi
    line32 : state,
    //example in line no 33
   // zardari : "sab pe bhari",
  };
}

function MDTP(dispatch){
  return {
      pehla : ()=>dispatch({type:'one'}),
      dusra : ()=>dispatch({type:'two',}),
      tesra : function(value){
        dispatch({type: 'three', value:value})
      }
  }
}


class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        stringa: 0
      };
    }

valueChange(event){
  this.setState({stringa: parseInt(event.target.value)});
}

handlclick(){
  this.props.tesra(this.state.stringa);
}



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {/*property call hu rahe hai uper jo function dea hai uski phr wahn se state change hu rahe hai 
          function se jo k store m ja raha hai ..*/}
          {this.props.line32}
          {/*{this.props.zardari}*/}
                  <br/>
        value {this.state.stringa}
        </p>
          <h3>in component</h3>
          <input type="text" onChange={this.valueChange.bind(this)}/> <br/>
          <button onClick={this.handlclick.bind(this)}>Increment User Input</button> <br/>  
    <button onClick={this.props.pehla}>Increment+1</button> <br/> 
    <button onClick={this.props.dusra}>Decrement-1</button><br/> 
    <button onClick={this.props.pehla}> increament+1 with handler</button> <br/>
                
      </div>
    );
  }
}

// store apne component m hasil krne k lea connect ka function use kar rahy hain
//

export default connect(MSTP,MDTP)(App);
