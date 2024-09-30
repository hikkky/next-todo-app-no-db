import React from 'react';

const Todo = ({ todo, setTodos }) => {
  // ToDoの完了状態をトグルする関数
  const handleToggle = async () => {
    try {
      const response = await fetch(`/api/todos/${todo.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !todo.completed }), // 完了状態を反転して送信
      });

      if (response.ok) {
        setTodos((prevTodos) =>
          prevTodos.map((item) =>
            item.id === todo.id ? { ...item, completed: !item.completed } : item
          )
        );
      } else {
        console.error('Failed to update todo');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // ToDoを削除する関数
  const handleClear = async () => {
    try {
      const response = await fetch(`/api/todos/${todo.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todo.id));
      } else {
        console.error('Failed to delete todo');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <li className='w-full flex items-center justify-between bg-white shadow-md rounded p-2 my-2'>
      <span
        className="w-1/2 justify-between p-4 bg-white border-l-4 border-blue-500"
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.text}
      </span>
      <button
        className='w-1/4 bg-green-500 text-white px-4 py-2 mr-2 rounded hover:bg-green-600'
        onClick={handleToggle}
      >
        {todo.completed ? '未完了' : '完了'}
      </button>
      <button
        className='w-1/4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
        onClick={handleClear}
      >
        削除
      </button>
    </li>
  );
};

export default Todo;