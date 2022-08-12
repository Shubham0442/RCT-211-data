import React, { useEffect, useRef } from 'react'
import { addTodoError, addTodoLoading, addTodoSucces, getTask} from '../Redux/action'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { store } from '../Store/store'

const TodoInput = () => {

    const state = useSelector((store)=>store)

    const ref = useRef()
    const dispatch = useDispatch()
    const handleAdd = ()=>{
    
        
               let value = ref.current.value

               dispatch(addTodoLoading())
       
                axios.post(`http://localhost:5050/myTodos`,{
                    title: value,
                    status:false
                })
                .then((res)=>{
                    //dispatch(addTodoSucces(res.data))
                }) 
                .then((res)=>{
                    dispatch(getTask)
                })
                .catch((error)=>{
                dispatch(addTodoError())
             })
           }

  return (
    <div>
        <h3>Todo</h3>
        <input type="text" ref={ref} placeholder="Add totod" />
        <button onClick={handleAdd}>ADD</button>
    </div>
  )
}

export default TodoInput