// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from "./actionTypes"
const initialState = {
  mens: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { payload, type } = action
  switch (type) {
    case types.GET_MEN_DATA_REQUEST: return { ...state, isLoading: true }
    case types.GET_MEN_DATA_SUCCESS: return { ...state, isLoading: false, mens: payload }
    case types.GET_MEN_DATA_FAILURE: return {...state,isLoading:false,isError:true}
    default:return state
  }
  
};

export { reducer };