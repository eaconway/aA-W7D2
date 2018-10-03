import React from 'react';
import TodoList from './todo_list.jsx';
import allTodos from './../../reducers/selectors.js';
import {receiveTodo, receiveTodos, fetchTodos, createTodo, deleteTodo} from './../../actions/todo_actions';
import {connect} from 'react-redux';
import {receiveErrors} from './../../actions/error_actions';

const mapStateToProps = state => {
  return {
    todos: allTodos(state),
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  receiveTodos: (todos) => dispatch(receiveTodos(todos)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
