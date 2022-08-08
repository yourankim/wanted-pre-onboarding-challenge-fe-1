import React, { useState } from 'react';
import axiosInstance from './axiosInstance';

function TodoDetail() {
  const [formData, setFormData] = useState();
  const handleChanged = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const createTodo = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('todos/', formData);
      alert(response.data.message);
    } catch (error) {
      alert(error);
      const { data } = error.response;
      alert(data.details);
    }
  };

  return (
    <div>
      <form onSubmit={createTodo}>
        <input
          id='title'
          type='text'
          placeholder='title'
          onChange={handleChanged}></input>
        <textarea id='content' onChange={handleChanged}></textarea>
        <button>등록</button>
      </form>
    </div>
  );
}

export default TodoDetail;
