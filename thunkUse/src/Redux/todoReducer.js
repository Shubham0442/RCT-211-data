import { GET_ERROR, GET_LOADING, GET_TODO, ADD_TODO, ADD_TODO_FAILURE, ADD_TODO_REQUEST } from "./actionTypes"


const initState = {
    isLoading: false,
    isError: false,
    todoData : [],
    addLoading:  false,
    addError: false 
}

export const todoReducer = (state= initState, { type, payload })=>{
    switch(type){
       
        case GET_LOADING: {
            return {
                ...state,
                isLoading: true,
            }
        }

        case GET_TODO : {
            return {
                ...state,
                isError: false,
                isLoading: false,
                todoData : payload
            }
        }

        case GET_ERROR : {
            return {
                ...state,
                isError: true
            }
        }

        // case ADD_TODO_REQUEST : {
        //     return {
        //         ...state,
        //         addLoading: true
        //     }
        // }

        // case ADD_TODO : {
        //     return {
        //         ...state,
        //         isError: false,
        //         isLoading: false,
        //         todoData : [
        //             ...state.todoData,
        //             payload
        //         ]
        //     }
        // }

        // case ADD_TODO_FAILURE: {
        //     return {
        //         ...state,
        //         addError: true
        //     }
        // }
        
        default : return state
        
    }
}