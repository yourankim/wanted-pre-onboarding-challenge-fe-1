import React, { useState } from 'react';

function NewTodo({ onCreateTodo }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onCreateTodo({ title, content });
    setTitle('');
    setContent('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id='title'
        type='text'
        value={title}
        placeholder='title'
        onChange={(e) => setTitle(e.target.value)}></input>
      <textarea
        id='content'
        value={content}
        onChange={(e) => setContent(e.target.value)}></textarea>
      <button>추가</button>
    </form>
  );
}

export default NewTodo;
