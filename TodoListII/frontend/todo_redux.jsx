import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import {receiveTodo, receiveTodos} from './actions/todo_actions';
import selector from './reducers/selectors.js';
import * as ApiUtil from './util/todo_api_util.js';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  window.store = store;

  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  // debugger
  window.selector = selector;
  window.fetchTodos = ApiUtil.fetchTodos;
  ReactDOM.render(<Root store={store}/>,root);
});
