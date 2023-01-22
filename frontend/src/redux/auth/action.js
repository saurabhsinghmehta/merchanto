import * as types from "./actionType";
import axios from "axios";


// sign up-
export const signUp = (sendData) => (dispatch) => {
    dispatch({type: types.REQUEST_SIGN_UP})
    return axios.post("http://localhost:8000/auth/signup", sendData)
        .then(res=>{
            dispatch({type: types.SUCCESS_SIGN_UP, signUp: res.data})
        })
        .catch(error=>{
            return dispatch({type: types.ERROR_SIGN_UP, signUp: error.response.data})
        })
} 


// sign in with email-
export const signInWithEmail = (sendData) => (dispatch) => {
    dispatch({type: types.REQUEST_SIGN_IN_WITH_EMAIL})
    return axios.post("http://localhost:8000/auth/signin", sendData)
        .then(res=>{
            console.log(res.data)
            return dispatch({type: types.SUCCESS_SIGN_IN_WITH_EMAIL, emailResponse: res.data})
        })
        .catch(error=>{
            return dispatch({type: types.ERROR_SIGN_IN_WITH_EMAIL, emailResponse: error.response.data})
        })
} 


// sign in with mobile number-
export const signInWithMobileNumber = (sendData) => (dispatch) => {
    dispatch({type: types.REQUEST_OTP})
    return axios.post("http://localhost:8000/auth/phonenumber", sendData)
        .then(res=>{
            return dispatch({type: types.SUCCESS_OTP, otpResponse: res.data})
        })
        .catch(error=>{
            return dispatch({type: types.ERROR_OTP, otpResponse: error.error})
        })
} 