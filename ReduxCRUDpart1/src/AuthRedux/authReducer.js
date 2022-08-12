
import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./AuthActionTypes"

const initAuth = {
    isAuth: false ,
    token: null,
    isLoading: false,
    isError: false
} 

export const authReducer = ( state = initAuth, { type, payload})=>{
    switch(type){

        case USER_LOGIN_REQUEST:{
            return {
                ...state,
                isLoading: true
            }
        }
        case USER_LOGIN_SUCCESS:{
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                token: payload,
                isError: false
            }
        }
        case USER_LOGIN_REQUEST:{
            return {
                ...state,
                isLoading: false,
                isAuth: false,
                token: null,
                isError: true
            }
        }
        
        default : return state
    }
}