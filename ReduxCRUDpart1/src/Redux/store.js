import { legacy_createStore, applyMiddleware, compose, combineReducers } from "redux"; 
import { reducer } from "./reducer";
import thunk from "redux-thunk";
import { authReducer } from "../AuthRedux/authReducer";
const rootReducer = combineReducers({
    reducer, 
    authReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))