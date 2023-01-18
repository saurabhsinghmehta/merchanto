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

export const getProductData=(dispatch)=>{
    dispatch(getDataRequest());
    axios.get('http://localhost:3000/products',)
    .then((res)=>{
        console.log("data",res)
        dispatch(getDataSuccess(res.data))
    })
    .catch((error)=>{
        console.log(error);
        dispatch(getDataFailure());
    })
}

