import axios from "axios"
import * as types from "./actionTypes"
const getmenrequest = () => {
    return {
        type:types.GET_MEN_DATA_REQUEST,
    }
}
const getmensuccess = (payload) => {
    return {
        type: types.GET_MEN_DATA_SUCCESS,
        payload
    }
}
const getmenfail = () => {
    return {
        type:types.GET_MEN_DATA_FAILURE,
    }
}

const getmen = (params) => (dispatch) => {
    dispatch(getmenrequest())
    return axios.get("http://localhost:8080/products",params).then((r) => {
        dispatch(getmensuccess(r.data))
    }).catch((e) => {
        dispatch(getmenfail())
    })
}
export { getmen }