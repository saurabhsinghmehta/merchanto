import * as types from "./actionType";

// initial state-
const initState = {
    isLoading : false,
    signUp : {},
    isError : false
}

// reducer function-
export const reducer = (state = initState, action) => {
    const {signUp, type} = action;

    switch(type)
    {
        case types.REQUEST_SIGN_UP:
            return {...state, isLoading: true}

        case types.SUCCESS_SIGN_UP:
            return {...state, isLoading: false, signUp}

        case types.ERROR_SIGN_UP:
            return {...state, isLoading: false, isError: true}

        default:
            return{...state}
    }
}