import React, { useEffect } from 'react'
import TodoInput from './TodoInput'
import { useSelector } from 'react-redux'
import TodoList from './TodoList'
import { getTask } from '../Redux/action'
import { useDispatch } from 'react-redux'

const Todo = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(getTask)
  },[])
    
  return (
    <div>
         <TodoInput/>
         <TodoList/>
    </div>
  )
}

export default Todo