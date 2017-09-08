import React, { Component } from 'react';
import { connect } from 'react-redux'
import { TodoAction } from '../store/action/action.js'


function mstp(state) {
    return {
        addtodo: state
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.renderTodo = this.renderTodo.bind(this)
    }
    _onChange(event) {
        this.setState({ text: event.target.value })
        console.log("onchange state", this.state)
    }
    _addTodo() {
        console.log("this.state", this.state)
        // this.props.TodoAction.addTodo(this.state.text);
        this.props.dispatch(TodoAction.addTodo(this.state.text));
    }
    renderTodo() {
        const { addtodo } = this.props;
        return (<ul>
            {addtodo.text.map((val, i) => {
                return
                (<li key={i}>{val.text}</li>);
            })}
        </ul>);
    }
    render() {
        console.log("this.props this is", this.props)
        return (
            <div style={{ textAlign: "center" }}>todo
                <br />

                <input type="text" onChange={this._onChange.bind(this)} />
                <button onClick={this._addTodo.bind(this)}>Add</button>

                {this.renderTodo()}

            </div>

        );
    }
}

export default connect(mstp)(App);