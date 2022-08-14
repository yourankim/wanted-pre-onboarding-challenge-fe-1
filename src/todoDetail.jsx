import React, { useState } from 'react';
import NewTodo from './newTodo';

function TodoDetail({ onUpdateTodo, todo }) {
  const [title, setTitle] = useState(todo ? todo.title : '');
  const [content, setContent] = useState(todo ? todo.content : '');
  console.log(todo);
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateTodo({ id: todo.id, title, content });
    setTitle('');
    setContent('');
  }

  return (
    <>
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
        <button>제출</button>
      </form>
      <button>취소</button>
    </>
  );
}

export default TodoDetail;
