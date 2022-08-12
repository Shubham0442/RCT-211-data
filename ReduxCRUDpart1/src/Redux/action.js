import axios from "axios"
import { GET_MUSIC_RECORD, 
         GET_MUSIC_RECORD_FAILURE, 
         GET_MUSIC_RECORD_REQUEST, 
         EDIT_DATA_FAILURE, 
         EDIT_DATA_REQUEST, 
         EDIT_DATA_SUCCESS} from "./actionTypes"

export const getMusicRecordRequest = () =>{
    return { type : GET_MUSIC_RECORD_REQUEST}
}

export const getMusicRecords = (Params)=> (dispatch) =>{
  
    dispatch(getMusicRecordRequest())

    return axios
    .get("http://localhost:8080/albums", Params)
    .then((res)=>{
         return dispatch({
            type: GET_MUSIC_RECORD,
            payload: res.data
         })
    })
    .catch((error)=>{
        return { type: GET_MUSIC_RECORD_FAILURE}
    })
}

export const editData = (id, payload)=>(dispatch)=>{

    dispatch({type: EDIT_DATA_REQUEST})

    return axios.patch(`http://localhost:8080/albums/${id}`, payload)
    .then((res)=>{
        return dispatch({type: EDIT_DATA_SUCCESS})
    })
    .catch((error)=>{
        dispatch({type:EDIT_DATA_FAILURE})
    })
}