import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchData } from './store/action.js'

function mapStateToProps(state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}
class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <button onClick={() => this.props.fetchData()}>Load data</button>
        </p>
        <div>
          {
            this.props.appData.isFetching && <p>Loading...</p>
          }
        </div>
        <div>
          {
            this.props.appData.data.length ? (
              this.props.appData.data.map((person, i) => {
                return <div key={i} >
                  <div>Name: {person.name}</div>
                  <div>Age: {person.age}</div>
                </div>
              })
            ) : null
          }

        </div>

      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
