import {
    GET_MUSIC_RECORDS_FAILURE,
    GET_MUSIC_RECORDS_SUCCESS,
    GET_MUSIC_RECORDS_LOADING
} from "./appActionTypes"


const appState = {
    isLoading: false,
    isError: false,
    musicRecords: []
}

export const appReducer = ( state = appState, { type, payload })=>{

    switch(type){
         case GET_MUSIC_RECORDS_LOADING:{
            return {
                ...state,
                isLoading: true
            }
         }
         case GET_MUSIC_RECORDS_SUCCESS:{
            return {
                ...state,
                isLoading: false,
                isError: false,
                musicRecords : payload
            }
         }
         case GET_MUSIC_RECORDS_FAILURE:{
            return {
                ...state,
                isLoading: false,
                isError: true
            }
         }

        default: return state
    }
}