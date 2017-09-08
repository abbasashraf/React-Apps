import React, { Component } from 'react';
import {connect} from 'react-redux';
import {TodoAction} from '../store/action/action.js'

import '../App.css';


function mapStateToProps(state){
  return {
    todo: state.TodoReducer
  }

}

class Todo extends Component {


handleSubmit(e){
      e.preventDefault();
      var value = this.refs.inputText.value;
      this.refs.inputText.value = "";
      this.props.dispatch(TodoAction.addFirebase(value));
      // var arr = [];
      // arr.push(value);
      // console.log(arr)
      console.log("onSubmit");
      
}


handleInput(){
  return (
        <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" ref='inputText'/>
        <button>Add</button>
        </form>
     
        </div>
           {this.props.todo.data.map((val,i)=>{
          return <p key={i}>{val} <span>x</span> </p>

        })}
        </div>
  );
}

  render() {
    // {this.handleInput()}
    if(this.props.todo.getData){
      return this.handleInput()
    }
    else{
      return <p>loadingg....</p>
    }


  }
}

export default connect(mapStateToProps)(Todo);
