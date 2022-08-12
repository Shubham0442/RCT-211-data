import { 
    GET_TODO_ERROR, 
    GET_TODO_LOADING, 
    GET_TODO_SUCCESS, 
    ADD_TODO_ERROR, 
    ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,
    DELETE_TODO,
    TOGGLE_TODO,
    UPDATE_TITLE
} from "./actionTypes"

import axios from "axios"

export const getTodoLoading = () =>{
    return {type : GET_TODO_LOADING}
}


export const getTodoSuccess = (payload) =>{
    return {type : GET_TODO_SUCCESS, payload}
}

export const getTodoError = () =>{
    return {type : GET_TODO_ERROR}
}

export const addTodoLoading = () =>{
    return {type: ADD_TODO_LOADING}
} 

export const addTodoSuccess = (payload) =>{
    
    // dispatch({type: ADD_TODO_LOADING})

    //     axios.post(`http://localhost:4000/todos`,
    //         {...load})
    //     .then((res)=>{
    //        dispatch({type: ADD_TODO_SUCCESS, payload: res.data}) 
    //     })
    //     .catch((error)=>{
    //         dispatch({type: ADD_TODO_ERROR})
    //     })

    return {type: ADD_TODO_SUCCESS, payload }
}

export const addTodoError = () =>{
    return {type: ADD_TODO_ERROR}
}

export const deleteTodo = (payload)=>{
        console.log("delete fun---payload,", payload)
         return {type: DELETE_TODO, payload}
}

export const toggleStatus = (payload)=>{
    return {type: TOGGLE_TODO, payload }
}

export const updateTitle = (payload) =>{
    return {type: UPDATE_TITLE, payload}
}