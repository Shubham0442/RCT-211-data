import { GET_MUSIC_RECORD, GET_MUSIC_RECORD_FAILURE, GET_MUSIC_RECORD_REQUEST} from "./actionTypes"

const initState = {
    mucicRecords: [],
    isLoading: false,
    isError: false 
} 

export const reducer = ( state = initState, { type, payload})=>{
    switch(type){

        case GET_MUSIC_RECORD_REQUEST : {
            return {
                ...state,
                isLoading: true,
                isError: false 
            }
        }
        case GET_MUSIC_RECORD : {
            return {
                ...state,
                isLoading: false,
                isError: false,
                mucicRecords: payload
            }
        }
        case GET_MUSIC_RECORD_FAILURE : {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        default: {
            return state
        }
    }
}