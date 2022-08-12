
import _default from "react-redux/es/components/connect"
import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./authActionTypes"
import { loadData , saveData } from "../Utilits/localSorageAuth"

const authState = {
    
    auth: loadData ("Auth")||{
                                isAuth: false,
                                token:null
                             } 
}



export const authReducer = (state = authState, {type, payload})=>{

    switch(type){
        case LOGIN_SUCCESS:{

            let tokenData = payload
            saveData("Auth", {isAuth: true, token: tokenData})
            return{
                ...state,
                auth : {
                    ...state.auth,
                    isAuth: true,
                    token : tokenData
                }
            }
        }

        case LOGIN_FAILURE:{
            saveData("Auth", {isAuth: false, token:null})
            return{
                ...state,
                auth : {
                    ...state.auth,
                    isAuth: false,
                    token : null
                }
            }
        }
        default : return state

        
    }
}