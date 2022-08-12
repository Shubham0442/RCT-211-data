

import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./authActionTypes" 

export const loginSuccessAction = (payload)=>{
    return {type: LOGIN_SUCCESS, payload}
}



export const loginFailureAction = () =>{
    return {type : LOGIN_FAILURE}
}