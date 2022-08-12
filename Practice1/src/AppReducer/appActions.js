
import axios from "axios"
import {
    GET_MUSIC_RECORDS_FAILURE,
    GET_MUSIC_RECORDS_SUCCESS,
    GET_MUSIC_RECORDS_LOADING,
    EDIT_MUSIC_RECORDS_FAILURE,
    EDIT_MUSIC_RECORDS_REQUEST,
    EDIT_MUSIC_RECORDS_SUCCESS
} from "./appActionTypes" 

export const getRecordLoading = ()=>{
     
    return { type: GET_MUSIC_RECORDS_LOADING}
}

export const getMusicRecord = (params)=>(dispatch)=>{
   
    dispatch(getRecordLoading())

    return axios.get(`http://localhost:8080/albums`, params)
    .then((res)=>{
        //console.log(res.data);
        return dispatch({ type: GET_MUSIC_RECORDS_SUCCESS, payload:res.data})
    })
    .catch((error)=>{
        dispatch({ type: GET_MUSIC_RECORDS_FAILURE})
    })
}

export const update = (id, payload)=>(dispatch)=>{

    dispatch({type: EDIT_MUSIC_RECORDS_REQUEST})

    return axios.patch(`http://localhost:8080/albums/${id}`, payload)
    .then((res)=>{
       return dispatch({type: EDIT_MUSIC_RECORDS_SUCCESS})
    })
    .catch((error)=>{
        dispatch({type: EDIT_MUSIC_RECORDS_FAILURE})
    })
}