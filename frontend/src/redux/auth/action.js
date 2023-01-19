import * as types from "./actionType";
import axios from "axios";

// sign up-
export const signUp = (sendData) => (dispatch) => {
    dispatch({type: types.REQUEST_SIGN_UP})
    return axios.post("http://localhost:8000/auth/signup", sendData)
        .then(res=>{
            // console.log(res.data.message)
            dispatch({type: types.SUCCESS_SIGN_UP, signUp: res.data})
        })
        .catch(error=>{
            // console.log(error.response.data.error)
            dispatch({type: types.ERROR_SIGN_UP})
            return alert(error.response.data.error)
        })
} 