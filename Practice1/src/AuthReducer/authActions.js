
import axios from 'axios'

import {
    LOGIN_RESPONCE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "./authActionTypes" 

export const login = (crid)=>(dispatch)=>{

    dispatch({type: LOGIN_RESPONCE})
    
    return axios.post(`https://reqres.in/api/login`, crid)
    .then((res)=>{
        return dispatch({type: LOGIN_SUCCESS, payload: res.data.token})
    })
    .catch((error)=>{
        dispatch({type:LOGIN_FAILURE})
    })
}