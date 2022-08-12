//Write the ActionCreator functions here

import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"; 
import axios from "axios"

export const login = (cred)=>(dispatch)=>{

    dispatch({type: LOGIN_REQUEST})

    return axios.post(`https://reqres.in/api/login`, cred)
    .then((res)=>{
       return dispatch({type:LOGIN_SUCCESS,payload: res.data.token})
    })
    .catch((error)=>{
        dispatch({type: LOGIN_FAILURE})
    })
}