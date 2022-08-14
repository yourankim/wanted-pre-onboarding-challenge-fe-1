import React, { useEffect, useState } from 'react';

function TodoEditor({ todo, onCancelButtonClick, onUpdateTodo }) {
  console.log('TodoEditor', todo);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    setTitle(todo.title);
    setContent(todo.content);
  }, [todo]);

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
