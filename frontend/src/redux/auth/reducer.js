import * as types from "./actionType";


// initial state-
const initState = {
    isLoading : false,
    signUp : {},
    emailResponse : {},
    otpResponse  : {},
    isError : false
}


// reducer function-
export const reducer = (state = initState, action) => {
    const {signUp, type, emailResponse, otpResponse} = action;

    switch(type)
    {
        // sign up-
        case types.REQUEST_SIGN_UP:
            return {...state, isLoading: true}

        case types.SUCCESS_SIGN_UP:
            return {...state, isLoading: false, signUp}

        case types.ERROR_SIGN_UP:
            return {...state, isLoading: false, isError: true, signUp}


            // sign in with email-
        case types.REQUEST_SIGN_IN_WITH_EMAIL:
            return {...state, isLoading: true}

        case types.SUCCESS_SIGN_IN_WITH_EMAIL:
            return {...state, isLoading: false, emailResponse}

        case types.ERROR_SIGN_IN_WITH_EMAIL:
            return {...state, isLoading: false, isError: true, emailResponse}


            // sign in with mobile number-
        case types.REQUEST_OTP:
            return {...state, isLoading: true}

        case types.SUCCESS_OTP:
            return {...state, isLoading: false, otpResponse}

        case types.ERROR_OTP:
            return {...state, isLoading: false, isError: true, otpResponse}

        default:
            return{...state}
    }
}