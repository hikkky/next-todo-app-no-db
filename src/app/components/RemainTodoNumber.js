import React from 'react'

const RemainTodoNumber = ( { todos }) => {
    return (
        <div className='my-2'>
            残りのタスク:{todos.filter((todo) => !todo.completed).length}
        </div>
    )
}

export default RemainTodoNumber