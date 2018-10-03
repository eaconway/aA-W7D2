export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
import {receiveErrors} from './error_actions';
import * as APIUtil from './../util/todo_api_util.js';

export const receiveTodos = (todos) => (
  {
    type: RECEIVE_TODOS,
    todos
  }
);

export const receiveTodo = (todo) => (
  {
    type: RECEIVE_TODO,
    todo
  }
);

export const removeTodo = (todo) => (
  {
    type: REMOVE_TODO,
    todo
  }
);

export const fetchTodos = () => dispatch => {
  return APIUtil.fetchTodos().then(res => dispatch(receiveTodos(res)));
};

export const createTodo = (todo) => dispatch => {
  return APIUtil.createTodo(todo)
    .then(res => dispatch(receiveTodo(res)), err => dispatch(receiveErrors(err.responseJSON)));
};

export const deleteTodo = (todo) => dispatch => {
  return APIUtil.deleteTodo(todo)
    .then(res => dispatch(removeTodo(res)));
};
