import React, { useRef } from 'react';

const InputTodo = ({ setTodos, todos }) => {
  const todoNameRef = useRef();

  const handleAddTodo = async () => {
    const name = todoNameRef.current.value;
    if (name.trim() === '') return; // 空の入力を防ぐ

    try {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: name }), // ToDoのテキストを送信
      });

      if (response.ok) {
        const newTodo = await response.json();
        setTodos([...todos, newTodo]); // 新しいToDoを追加して表示
        todoNameRef.current.value = ''; // 入力フィールドをクリア
      } else {
        console.error('Failed to add todo');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='my-2'>
      <form>
        <input
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          type="text"
          ref={todoNameRef}
        />
        <button
          className='w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
          type="button"
          onClick={handleAddTodo}
        >
          タスクを追加
        </button>
      </form>
    </div>
  );
};

export default InputTodo;