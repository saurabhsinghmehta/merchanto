
import { reducer as MenReducer } from "./Men/reducer";
import { reducer as app } from "./app/reducer";
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"

const rootreducer = combineReducers({ MenReducer,app });

const store = legacy_createStore(rootreducer,applyMiddleware(thunk));

export { store };



