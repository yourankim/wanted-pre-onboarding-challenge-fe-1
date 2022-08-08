import React, { useEffect, useState } from 'react';
import axiosInstance from './axiosInstance';
import TodoDetail from './todoDetail';

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const response = await axiosInstance.get('todos');
      console.log(response.data.data);
      setTodos([...response.data.data]);
    };
    getTodos();
  }, []);

  return (
    <>
      <section>
        <ul>
          {!todos || todos.length === 0
            ? 'no todos!'
            : todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
        </ul>
      </section>
      <section>
        <TodoDetail />
      </section>
    </>
  );
}

export default Todos;
