import React, { useState } from 'react';

function TodoDetail({ todo, onModifyButtonClick, onDeleteTodo }) {
  console.log('TodoDetail');

  return todo == null ? (
    <p>할 일을 선택하면 상세 내용을 볼 수 있습니다.</p>
  ) : (
    <div>
      <h3>{todo.title}</h3>
      <pre>{todo.content}</pre>
      <button onClick={onModifyButtonClick}>수정</button>
      <button onClick={onDeleteTodo}>삭제</button>
    </div>
  );
}

export default TodoDetail;
