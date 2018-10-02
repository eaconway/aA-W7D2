import {receiveTodos, receiveTodo} from './../actions/todo_actions.js';
import {RECEIVE_TODOS, RECEIVE_TODO} from './../actions/todo_actions.js';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

export default (state = initialState, action) => {
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_TODOS:
      newState = {};
      action.todos.forEach((todo) => {
        newState[todo.id] = todo;
      });
      return newState;
    case RECEIVE_TODO:
      newState[action.todo.id] = action.todo;
      return newState;
    default:
      return state;
  }
};
