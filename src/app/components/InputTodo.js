import React from 'react'
import { useRef } from 'react';
import { v4 as uuidv4 } from "uuid";

const InputTodo = ({ setTodos }) => {

    const todoNameRef = useRef();

    const handleAddTodo = () => {
      const name = todoNameRef.current.value;
      setTodos((prevTodos) => {
        return [...prevTodos, { id: uuidv4(), name: name, completed: false}]
      })
      todoNameRef.current.value = null;
    }
  
    return (
      <div className='my-2'>
          <form>
              <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400" type="text" ref={todoNameRef}/>
              <button className='w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600' type="button" onClick={handleAddTodo}>タスクを追加</button>
          </form>
      </div>
    )
}

export default InputTodo