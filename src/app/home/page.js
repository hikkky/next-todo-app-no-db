"use client";

import { useState, useEffect } from 'react';
import Title from '../components/Title';
import RemainTodoNumber from '../components/RemainTodoNumber';
import InputTodo from '../components/InputTodo';
import TodoList from '../components/TodoList';

export default function Home() {
  const [todos, setTodos] = useState([]);

  // useEffectでAPIからToDoリストを取得する
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('/api/todos');
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error('Failed to fetch todos:', error);
      }
    };
    fetchTodos();
  }, []);

  return (
    <div className="w-5px flex flex-col items-center justify-center my-10">
      <Title />
      <RemainTodoNumber todos={todos} />
      <div className='px-8 py-6'>
        <InputTodo setTodos={setTodos} todos={todos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}