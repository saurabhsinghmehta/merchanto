import { reducer as MenReducer } from "./Men/reducer";
import { reducer as signUpReducer } from "./auth/reducer";
import { reducer as app } from "./app/reducer";
import { reducer as Sortingreducer } from "./Sorting/reducer";
import { Productreducer } from "./ProductMgt/reducer";

import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootreducer = combineReducers({
  MenReducer,
  app,
  signUpReducer,
  Sortingreducer,
  Productreducer,
});

const store = legacy_createStore(rootreducer, applyMiddleware(thunk));

export { store };
