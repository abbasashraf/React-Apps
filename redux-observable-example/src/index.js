import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/app/App';
import './index.css';
import store from './store'
import {Provider} from 'react-redux';





// store.dispatch({type:'one'})
// store.dispatch({type: 'two'})

function handleFUNC(){
  store.dispatch({type:'one'})
}


ReactDOM.render(
  <Provider store={store}>
    <center>
  <div>
  <App />
  <div>
    <h3>in index file</h3>
    <button onClick={()=>store.dispatch({type: 'one'})}>increament+1</button> <br/>
    <button onClick={()=>store.dispatch({type:'two'})}>decreament-1</button> <br/>
    <button onClick={handleFUNC}>increament+1 with handler</button>
        
  </div>
  </div>
  </center>
  </Provider>,
  document.getElementById('root')
);
