
import { reducer as MenReducer } from "./Men/reducer";
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"

const rootreducer = combineReducers({ MenReducer });

const store = legacy_createStore(rootreducer,applyMiddleware(thunk));

export { store };

import { reducer as app } from "./app/reducer";
//import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { legacy_createStore,applyMiddleware,compose,combineReducers } from "redux";
import thunk from 'redux-thunk';

// NOTE: use this store variable to create a store.
const store = legacy_createStore(app,(applyMiddleware(thunk)));

export { store };

