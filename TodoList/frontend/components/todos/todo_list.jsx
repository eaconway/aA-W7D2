import React from 'react';

// class TodoList extends React.Component {
//
// }

const TodoList = ({ todos }) => {
  // debugger
  return (
    <ul>
      {todos.map((todo, idx) => <li key={idx}>{todo.title}</li>)}
    </ul>
  )
};

export default TodoList;
