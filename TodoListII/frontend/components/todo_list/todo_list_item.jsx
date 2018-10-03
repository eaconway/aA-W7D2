import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo() {
    this.props.deleteTodo(this.props.todo);
  }

  render() {
    return (
      <li>{this.props.todo.title} <button onClick={this.deleteTodo}>Remove</button></li>
    );
  }
}

export default TodoListItem;
