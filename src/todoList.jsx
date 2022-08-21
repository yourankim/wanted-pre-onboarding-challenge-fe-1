import React from 'react';
import { Link } from 'react-router-dom';

function TodoList({ todos }) {
  console.log('TodoList');
  return (
    <ul>
      {!todos || todos.length === 0
        ? 'no todos!'
        : todos.map((todo) => (
            <li key={todo.id}>
              <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
            </li>
          ))}
    </ul>
  );
}

export default TodoList;
