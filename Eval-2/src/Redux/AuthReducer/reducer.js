// NOTE: DO NOT MODIFY the intial state structure in this file.

import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, {type, payload}) => {
      
  switch(type){
     
    case LOGIN_REQUEST:{
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    }

    case LOGIN_SUCCESS:{
      return {
        ...state,
        isAuth: true,
        token: payload,
        isLoading: false,
        isError: false
      }
    }

    case LOGIN_FAILURE:{
      return {
        ...state,
        isAuth: false,
        token: "",
        isLoading: false,
        isError: true
      }
    }

    default: return state;
  }
  
};

export { reducer };
