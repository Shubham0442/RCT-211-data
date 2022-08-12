
import { 
    GET_TODO_ERROR, 
    GET_TODO_SUCCESS, 
    GET_TODO_LOADING, 
    ADD_TODO_ERROR, 
    ADD_TODO_LOADING,
    ADD_TODO_SUCCESS,
    DELETE_TODO,
    TOGGLE_TODO,
    UPDATE_TITLE
} from "./actionTypes"


const initState = {
    isLoading: false,
    isError: false,
    todos : []
}

export const todoReducer = (state = initState, {type, payload}) =>{

    switch (type){
        
        case GET_TODO_LOADING: {
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        }

        case GET_TODO_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                todos: [...payload]
            }
        }
        case GET_TODO_ERROR: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }

        case ADD_TODO_LOADING: {
             return {
                ...state,
                isLoading: true,
                isError: false
             }
        }

        case ADD_TODO_SUCCESS: {
            return {
               ...state,
               isLoading: false,
               todos: [
                 ...state.todos,
                    payload
               ]
            }
       }

       case ADD_TODO_ERROR: {
        return {
           ...state,
           isLoading: false,
           isError: true
        }
      }

      case DELETE_TODO:{
        return {
            ...state,
            isLoading: false,
            todos: [...payload]
        }
      }

      case TOGGLE_TODO:{
        return {
            ...state,
            isLoading: false,
            todos: [...payload]
        }
      }

      case UPDATE_TITLE:{
        return {
            ...state,
            isLoading: false,
            todos: [...state.todos]
        }
      }


        default :{
            return state
        }
        
    }
}