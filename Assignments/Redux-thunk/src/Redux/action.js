import { GET_ERROR, GET_LOADING, GET_TODO, ADD_TODO, ADD_TODO_FAILURE, ADD_TODO_REQUEST } from "./actionTypes" 
import axios from "axios"


export const getTodoLoding = () =>{
    return { type: GET_LOADING}
}

export const getTodoSuccess = (payload) =>{
    return { type: GET_TODO, payload}
}


export const getTodoError = () =>{
    return { type: GET_ERROR}
}

export const  addTodoLoading = () =>{
    return { type: ADD_TODO_REQUEST}
}

export const  addTodoSucces = (payload) =>{
    return { type: ADD_TODO, payload}
}

export const  addTodoError = () =>{
    return { type: ADD_TODO_FAILURE}
}

export const getTask = (dispatch) =>{
   
    dispatch(getTodoLoding())
    axios.get(`http://localhost:5050/myTodos`)
    .then((res)=>{
        dispatch(getTodoSuccess(res.data))
    })
    .catch((error)=>{
        dispatch(getTodoError())
    })
}




