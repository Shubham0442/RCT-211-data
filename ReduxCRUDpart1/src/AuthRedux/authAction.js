import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./AuthActionTypes" 
import axios from "axios" 



export const login = (cridential) =>(dispatch) =>{
    dispatch({type: USER_LOGIN_REQUEST});

    // return axios({
    //     method: "post",
    //     url:"/api/login",
    //     baseURL: "https://reqres.in/",

    // }) 
    
    dispatch({type:USER_LOGIN_REQUEST})

   return axios.post(`https://reqres.in/api/login`, 
    cridential)
    .then((res)=>{
       return dispatch({type: USER_LOGIN_SUCCESS, payload: res.data.token})
    })
    .catch((error)=>{
        dispatch({type:USER_LOGIN_FAILURE})
    })
}