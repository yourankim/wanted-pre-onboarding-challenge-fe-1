import React, { useState } from 'react';

function TodoEditor({ todo, onCancelButtonClick, onUpdateTodo }) {
  console.log('TodoEditor');
  const [title, setTitle] = useState(todo.title);
  const [content, setContent] = useState(todo.content);
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
      <button onClick={onCancelButtonClick}>취소</button>
    </>
  );
}

export default TodoEditor;
