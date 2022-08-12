
import { legacy_createStore, applyMiddleware } from "redux"; 
import { todoReducer } from "../Redux/todoReducer";

const customMiddleware = (store)=>(next)=>(action)=>{

    if(typeof action === "function")
    {
        return action(store.dispatch)
    }
    else if(typeof action === "object")
    {
          return next(action)
    }
}

export const store = legacy_createStore(todoReducer, applyMiddleware(customMiddleware) )