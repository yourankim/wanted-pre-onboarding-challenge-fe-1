import React, { useEffect, useState } from 'react';
import axiosInstance from './axiosInstance';
import TodoList from './todoList';
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

  const createTodo = async (newTodo) => {
    try {
      const response = await axiosInstance.post('todos/', newTodo);
      console.log(response.data);
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
