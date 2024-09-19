"use client";

import { useState } from 'react';
import Title from '../components/Title';
import RemainTodoNumber from '../components/RemainTodoNumber';
import InputTodo from '../components/InputTodo';
import TodoList from '../components/TodoList';

export default function Home() {

  const [todos, setTodos] = useState([]);

  return (
    <div className="w-500000px flex flex-col items-center justify-center my-10">
      <Title />
      <RemainTodoNumber todos={todos}/>
      <div className='px-8 py-6'>
        <InputTodo setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  );
}