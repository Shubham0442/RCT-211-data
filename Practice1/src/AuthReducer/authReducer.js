
import {
    LOGIN_RESPONCE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "./authActionTypes" 

const authState = {
    
    isLoading: false,
    isError: false,
    isAuth: false,
    token: null
} 

export const authReducer = (state = authState, { type, payload })=>{
    switch(type){
        case LOGIN_RESPONCE:{
            return{
                ...state,
                isLoading: true,
            }
        }
        case LOGIN_SUCCESS:{
            return{
                ...state,
                isLoading: false,
                isError:false,
                isAuth: true,
                token: payload 
            }
        }
        case LOGIN_FAILURE:{
            return{
                ...state,
                isLoading: false,
                isError:true,
                isAuth: false,
                token: null 
            }
        }
        default: return state
    }
}