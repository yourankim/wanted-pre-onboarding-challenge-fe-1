import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from './axiosInstance';
import TodoList from './todoList';
import NewTodo from './newTodo';
import TodoDetail from './todoDetail';
import TodoEditor from './todoEditor';

function Todos() {
  console.log('Todos');
  const currentTodoId = useParams().id;
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState();
  const [isEditMode, setIsEditMode] = useState(false);

  const getTodos = async () => {
    console.log('getTodos');
    try {
      const response = await axiosInstance.get('todos');
      const { data } = response.data;
      setTodos([...data]);
      if (currentTodoId) {
        setSelectedTodo(data.find((todo) => todo.id === currentTodoId));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    setSelectedTodo(todos.find((todo) => todo.id === currentTodoId));
  }, [currentTodoId]);

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

  const updateTodo = async (modifiedTodo) => {
    try {
      const response = await axiosInstance.put(
        `todos/${modifiedTodo.id}`,
        modifiedTodo
      );
      getTodos();
      setIsEditMode(false);
    } catch (error) {
      alert(error);
      const { data } = error.response;
      alert(data.details);
    }
  };

  const deleteTodo = async () => {
    try {
      const response = await axiosInstance.delete(`todos/${selectedTodo.id}`);
      getTodos();
      setIsEditMode(false);
    } catch (error) {
      alert(error);
      const { data } = error.response;
      alert(data.details);
    }
  };

  return (
    <>
      <section>
        <TodoList
          todos={todos}
          onSelectTodo={(todo) => setSelectedTodo(todo)}
        />
      </section>
      <section>
        <NewTodo onCreateTodo={createTodo}></NewTodo>
        {isEditMode ? (
          <TodoEditor
            todo={selectedTodo}
            onCancelButtonClick={() => setIsEditMode(false)}
            onUpdateTodo={updateTodo}
          />
        ) : (
          <TodoDetail
            todo={selectedTodo}
            onModifyButtonClick={() => setIsEditMode(true)}
            onDeleteTodo={deleteTodo}
          />
        )}
      </section>
    </>
  );
}

export default Todos;
