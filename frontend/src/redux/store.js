import { legacy_createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { reducer as signUpReducer } from "./auth/reducer";

const rootReducer = combineReducers({signUpReducer});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))