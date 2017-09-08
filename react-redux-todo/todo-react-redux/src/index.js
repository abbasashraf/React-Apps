import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/app.js';
import './index.css';
import {Provider} from 'react-redux';
import {store} from '../src/store/store.js'

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
