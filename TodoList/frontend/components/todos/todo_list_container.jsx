import React from 'react';
import TodoList from './todo_list.jsx';
import allTodos from './../../reducers/selectors.js';
import {receiveTodo, receiveTodos} from './../../actions/todo_actions';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  receiveTodos: (todos) => dispatch(receiveTodos(todos))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
