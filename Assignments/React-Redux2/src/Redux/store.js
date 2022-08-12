
import { legacy_createStore,combineReducers } from "redux"; 
import { todoReducer } from "./todoReducer";
import { authReducer } from "../AuthRedux/authReducer";

const rootReducer = combineReducers({
      todoReducer,
      authReducer
})
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = legacy_createStore(todoReducer, composeEnhancers(applyMiddleware(thunk))) 

export const store = legacy_createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )