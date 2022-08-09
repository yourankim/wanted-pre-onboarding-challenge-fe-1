import React, { useEffect, useState } from 'react';
import axiosInstance from './axiosInstance';
import TodoList from './todoList';
import TodoDetail from './todoDetail';

function Todos() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const response = await axiosInstance.get('todos');
    setTodos([...response.data.data]);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const createTodo = async (newTodo) => {
    try {
      const response = await axiosInstance.post('todos/', newTodo);
      getTodos();
    } catch (error) {
      alert(error);
      const { data } = error.response;
      alert(data.details);
    }
  };

  return (
    <>
      <section>
        <TodoList todos={todos} />
      </section>
      <section>
        <TodoDetail onCreateTodo={createTodo} />
      </section>
    </>
  );
}

export default Todos;
