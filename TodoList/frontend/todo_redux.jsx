import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import {receiveTodo, receiveTodos} from './actions/todo_actions';
import selector from './reducers/selectors.js';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("content");
  const store = configureStore();

  ReactDOM.render(<Root store={store}/>,root);
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  // debugger
  window.selector = selector;
});
