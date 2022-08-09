import React from 'react';

function TodoList({ todos }) {
  return (
    <ul>
      {!todos || todos.length === 0
        ? 'no todos!'
        : todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
    </ul>
  );
}

export default TodoList;
