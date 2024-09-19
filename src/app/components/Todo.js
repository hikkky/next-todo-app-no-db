import React from 'react'

const Todo = ({ todo, setTodos }) => {

    const handleDone = () => {
        setTodos((prevTodos) =>
            prevTodos.map((item) =>
                item.id === todo.id ? { ...item, completed: !item.completed } : item
            )
        )
    }

    const handleClear = () => {
        setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todo.id));
    }

    return (
        <li className='w-full flex items-center justify-between bg-white shadow-md rounded p-2 my-2'>
            <span className="w-1/2 justify-between p-4 bg-white border-l-4 border-blue-500" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.name}
            </span>
            <button className='w-1/4 bg-green-500 text-white px-4 py-2 mr-2 rounded hover:bg-green-600' onClick={handleDone}>完了</button>
            <button className='w-1/4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600' onClick={handleClear}>削除</button>
        </li>
    )

}

export default Todo