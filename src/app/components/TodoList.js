import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos }) => {
    return (
        <div className='my-2'>
            <ul className='list-none p-0'>
                {todos.map((todo) => <Todo todo={todo} key={todo.id} setTodos={setTodos}/>)}
            </ul>
        </div>
    )
  }

export default TodoList