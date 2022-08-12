
import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux"; 
import thunk from "redux-thunk";
import { appReducer } from "../AppReducer/appReducer";
import { authReducer } from "../AuthReducer/authReducer"; 

const rootReducer = combineReducers({
    appReducer,
    authReducer
});

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = legacy_createStore( rootReducer, composeEnhancers(applyMiddleware(thunk)) )