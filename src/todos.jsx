import React, { useEffect, useState } from 'react';
import axiosInstance from './axiosInstance';
import TodoList from './todoList';
import NewTodo from './newTodo';
import TodoDetail from './todoDetail';
import TodoEditor from './todoEditor';

function Todos() {
  console.log('Todos');
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState();
  const [isEditMode, setIsEditMode] = useState(false);

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

  const updateTodo = async (modifiedTodo) => {
    try {
      const response = await axiosInstance.put(
        `todos/${modifiedTodo.id}`,
        modifiedTodo
      );
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
        <TodoList
          todos={todos}
          onSelectTodo={(selectedTodo) => setSelectedTodo(selectedTodo)}
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
          />
        )}
      </section>
    </>
  );
}

export default Todos;
