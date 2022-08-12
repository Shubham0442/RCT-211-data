//Write the ActionCreator functions here
import axios from "axios";
import { GET_WATCHES_DATA_FAILURE, GET_WATCHES_DATA_REQUEST, GET_WATCHES_DATA_SUCCESS } from "./actionType";



export const getWatchData = (parms)=>(dispatch)=>{
    dispatch({type:GET_WATCHES_DATA_REQUEST})

    return axios.get(`http://localhost:8080/watches`, parms)
    .then((res)=>{
       return dispatch({type: GET_WATCHES_DATA_SUCCESS, payload: res.data})
    })
    .catch((error)=>{
        dispatch({type: GET_WATCHES_DATA_FAILURE})
    })
}