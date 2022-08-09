import React, { useState } from 'react';

function TodoDetail({ onCreateTodo }) {
  const [formData, setFormData] = useState();
  const handleChanged = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    onCreateTodo(formData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
