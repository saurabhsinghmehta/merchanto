import { reducer as MenReducer } from "./Men/reducer";
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"

const rootreducer = combineReducers({ MenReducer });

const store = legacy_createStore(rootreducer,applyMiddleware(thunk));

export { store };
