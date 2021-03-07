import React from 'react';
import ReactDOM from 'react-dom';
import { bugAdded, bugRemoved, bugResolved } from './actions.js';
import App from './App.jsx';
import store from './store'

store.subscribe(() => console.log('store has changed', store))

store.dispatch(bugAdded('Bug1'))

store.dispatch(bugResolved(1))

console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
