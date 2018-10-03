import React from 'react';
import TodoListItem from './../todo_list/todo_list_item.jsx';
import TodoForm from './../todo_list/todo_form.jsx';

class TodoList extends React.Component {
  componentDidMount(){
    this.props.fetchTodos();
  }

  render() {
    const {receiveTodo, todos, createTodo, errors, deleteTodo} = this.props;
    return (
      <div>
        <TodoForm receiveTodo={receiveTodo} createTodo={createTodo} errors={errors} />
        <ul>
          {todos.map((todo) => <TodoListItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />)}
        </ul>
      </div>
    );
  }
}

export default TodoList;
