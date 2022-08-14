import React from 'react';

function TodoList({ todos, onSelectTodo }) {
  console.log('TodoList');
  return (
    <ul>
      {!todos || todos.length === 0
        ? 'no todos!'
        : todos.map((todo) => (
            <li key={todo.id} onClick={(e) => onSelectTodo(todo.id)}>
              {todo.title}
            </li>
          ))}
    </ul>
  );
}

export default TodoList;
