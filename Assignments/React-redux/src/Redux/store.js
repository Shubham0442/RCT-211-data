
import { legacy_createStore } from "redux"; 
import { todoReducer } from "./todoReducer";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = legacy_createStore(todoReducer, composeEnhancers(applyMiddleware(thunk))) 

export const store = legacy_createStore(todoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )