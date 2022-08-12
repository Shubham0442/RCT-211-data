import React, { useState } from 'react'
import TodoItems from './TodoItems'

const initialState = [
    { id: 1, status: false, title: "task1"},
    { id: 2, status: false, title: "task2"},
    { id: 3, status: false, title: "task3"}
]

const Todo = () => {

    const [ todos, setTodos] = useState(initialState)
    const [text, setText ] = useState("") 

    const handleAdd = () =>{

    }
    
  return (
    <div>
        <h1>Todo</h1>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={handleAdd}>Add</button>

        <div>
            { todos.length &&
                todos.map((elem)=>(
                    <TodoItems key={elem.id} {...elem}/>
                 ))
            }
        </div>
    </div>
  )
}

export default Todo