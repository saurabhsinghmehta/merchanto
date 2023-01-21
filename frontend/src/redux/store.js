<<<<<<< HEAD
import { legacy_createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { reducer as signUpReducer } from "./auth/reducer";

const rootReducer = combineReducers({signUpReducer});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
=======

import { reducer as MenReducer } from "./Men/reducer";
import { reducer as app } from "./app/reducer";
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"

const rootreducer = combineReducers({ MenReducer,app });

const store = legacy_createStore(rootreducer,applyMiddleware(thunk));

export { store };



>>>>>>> abbcff72531fc1135fb86774c09a68e3de08fbf2
