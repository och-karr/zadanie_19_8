import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers} from 'redux';
import DevTools from './DevTools';
import reducer from './reducer.js';
import {addComment} from './actions.js';
// import {removeComment} from './actions.js';
// import {editComment} from './actions.js';
// import {thumbUpComment} from './actions.js';
// import {thumbDownComment} from './actions.js';

const store = createStore(
  reducer,
  DevTools.instrument()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
//do props.store przypisujemy zawartość zmiennej store

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));
