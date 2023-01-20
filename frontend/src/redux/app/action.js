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

export const addCartDataRequest=()=>{
    return {
        type:types.ADD_CART_DATA_REQUEST
    }
}
export const addCartDataSuccess=(payload)=>{
    return {
        type:types.ADD_CART_DATA_SUCCESS,payload

    }
}
export const addCartDataError=()=>{
    return {
        type:types.ADD_CART_DATA_ERROR
    }
}

export const getCartDataRequest=()=>{
    return {
        type:types.GET_CART_DATA_REQUEST
    }
}
export const getCartDataSuccess=(payload)=>{
    return {
        type:types.GET_CART_DATA_SUCCESS,payload

    }
}
export const getCartDataError=()=>{
    return {
        type:types.GET_CART_DATA_ERROR
    }
}
const deleteCartDataRequest=()=>{
    return{
        type:types.DELETE_CART_DATA_REQUEST
    }
}
export const deleteCartDataSuccess=(id)=>{
    return{
        type:types.DELETE_CART_DATA_SUCCESS,
        payload:id
    }
}

export const deleteCartDataError=()=>{
    return{
        type:types.DELETE_CART_DATA_ERROR
    }
}

export const getCartData=()=>(dispatch)=>{
    dispatch(getCartDataRequest());
    return axios.get('http://localhost:3000/cart')
    .then((res)=>dispatch(getCartDataSuccess(res.data)))
    .catch((error)=>{
        dispatch(getCartDataError(error))
    }) 
}

export const addCartData=(payload)=>(dispatch)=>{
    dispatch(addCartDataRequest())
    return axios
    .post('http://localhost:3000/cart',payload)
    .then((res)=>{
        dispatch(addCartDataSuccess(res.data))
    })
    .catch((e)=>{
        dispatch(addCartDataError(e))
    })
}
export const deleteCartData=(id)=>(dispatch)=>{
    dispatch(deleteCartDataRequest());
    axios
    .delete(`http://localhost:3000/cart/${id}`)
    .then((res)=>{
     dispatch(deleteCartDataSuccess())
    })
    .catch((err)=>{
     console.log(err);
     dispatch(deleteCartDataError())
 
    })
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


