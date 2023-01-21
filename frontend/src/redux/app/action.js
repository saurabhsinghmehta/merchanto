//Write the ActionCreator functions here
import * as types from './actionType';
import axios from 'axios';

export const getDataRequest=()=>{
    return {
        type:types.GET_PRODUCT_DATA_REQUEST
    }
}
export const getDataSuccess=(payload)=>{
    return {
        type:types.GET_PRODUCT_DATA_SUCCESS,
        payload
    }
}
export const getDataFailure=()=>{
    return {
        type:types.GET_PRODUCT_DATA_FAILURE
    }
}

export const getProductData=(params)=>(dispatch)=>{
    dispatch(getDataRequest());
    axios.get('https://super-paint-flamingo.glitch.me/AllProducts',params)
    .then((res)=>{
        console.log("data",res)
        dispatch(getDataSuccess(res.data))
    })
    .catch((error)=>{
        console.log(error);
        dispatch(getDataFailure());
    })
}
export const getMenProductData=(params)=>(dispatch)=>{
    dispatch(getDataRequest());
    axios.get('http://localhost:3000/products',params)
    .then((res)=>{
        console.log("data",res)
        dispatch(getDataSuccess(res.data))
    })
    .catch((error)=>{
        console.log(error);
        dispatch(getDataFailure());
    })
}
