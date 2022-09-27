import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/reducer";
import { chatReducer } from "./Chat/reducer";

const middleware = [thunk];

const composeEnhancers = 
  typeof window === 'object' && 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;
  
  const enhancer = composeEnhancers(applyMiddleware(...middleware));
  
const rootReducer = combineReducers({
   authReducer, chatReducer,
})

export const store = createStore(rootReducer, enhancer);
