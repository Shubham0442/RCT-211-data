import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from "react-redux"
import { addTodoError, addTodoLoading, addTodoSuccess } from '../Redux/action'

const TodoInput = () => {

    const [text , setText] = useState("")

    const dispatch = useDispatch()

    const handleAddTodo = () =>{
        
    //    dispatch(addTodoSuccess
    //    ({
    //     title:text,
    //     status: false
    //    }))
        
        dispatch(addTodoLoading())

           axios.post(`http://localhost:4000/todos`,{
                title: text,
                status: false
               })
                .then((res)=>{
                dispatch(addTodoSuccess(res.data))
                })
                .catch((error)=>{
                    dispatch(addTodoError())
                })
            }

  return (
    <div>
        <input type="text" placeholder='Add something' value = {text} onChange = {(e)=>setText(e.target.value)}/>
        <button onClick={handleAddTodo}>ADD</button>
    </div>
  )
}

export default TodoInput