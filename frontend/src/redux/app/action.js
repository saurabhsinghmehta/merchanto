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

export const addCheckoutDataRequest=()=>{
    return {
        type:types.ADD_CHECKOUT_DATA_REQUEST
    }
}
export const addCheckoutDataSuccess=(payload)=>{
    return {
        type:types.ADD_CHECKOUT_DATA_SUCCESS,payload

    }
}
export const addCheckoutDataError=()=>{
    return {
        type:types.ADD_CHECKOUT_DATA_ERROR
    }
}
export const addPaymentDataRequest=()=>{
    return {
        type:types.ADD_PAYMENT_DATA_REQUEST
    }
}
export const addPaymentDataSuccess=(payload)=>{
    return {
        type:types.ADD_PAYMENT_DATA_SUCCESS,payload

    }
}
export const addPaymentDataError=()=>{
    return {
        type:types.ADD_PAYMENT_DATA_ERROR
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
        type:types.GET_CHECKOUT_DATA_ERROR
    }
}
export const getCheckoutDataRequest=()=>{
    return {
        type:types.GET_CHECKOUT_DATA_REQUEST
    }
}
export const getCheckoutDataSuccess=(payload)=>{
    return {
        type:types.GET_CHECKOUT_DATA_SUCCESS,payload

    }
}
export const getCheckoutDataError=()=>{
    return {
        type:types.GET_CHECKOUT_DATA_ERROR
    }
}
export const getPaymentDataRequest=()=>{
    return {
        type:types.GET_PAYMENT_DATA_REQUEST
    }
}
export const getPaymentDataSuccess=(payload)=>{
    return {
        type:types.GET_PAYMENT_DATA_SUCCESS,
        payload

    }
}
export const getPaymentDataError=()=>{
    return {
        type:types.GET_PAYMENT_DATA_ERROR
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
    return axios.get('https://meesho-clone-tau.vercel.app/cart')
    .then((res)=>dispatch(getCartDataSuccess(res.data)))
    .catch((error)=>{
        dispatch(getCartDataError(error))
    }) 
}

export const addCartData=(payload)=>(dispatch)=>{
    dispatch(addCartDataRequest())
    return axios
    .post('https://meesho-clone-tau.vercel.app/cart',payload)
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
    .delete(`https://meesho-clone-tau.vercel.app/cart/${id}`)
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
    axios.get('https://meesho-clone-tau.vercel.app/menproduct',params)
    .then((res)=>{
        console.log("data",res)
        dispatch(getDataSuccess(res.data))
    })
    .catch((error)=>{
        console.log(error);
        dispatch(getDataFailure());
    })
}


export const getCheckoutData=()=>(dispatch)=>{
    dispatch(getCheckoutDataRequest());
    return axios.get('https://meesho-clone-tau.vercel.app/checkout')
    .then((res)=>dispatch(getCheckoutDataSuccess(res.data)))
    .catch((error)=>{
        dispatch(getCheckoutDataError(error))
    }) 
}

export const addCheckoutData=(payload)=>(dispatch)=>{
    dispatch(addCheckoutDataRequest())
    return axios
    .post('https://meesho-clone-tau.vercel.app/checkout',payload)
    .then((res)=>{
        dispatch(addCheckoutDataSuccess(res.data))
    })
    .catch((e)=>{
        dispatch(addCheckoutDataError(e))
    })
}



export const addPaymentData=(payload)=>(dispatch)=>{
    dispatch(addPaymentDataRequest())
    return axios
    .post('https://meesho-clone-tau.vercel.app/payment',payload)
    .then((res)=>{
        dispatch(addPaymentDataSuccess(res.data))
    })
    .catch((e)=>{
        dispatch(addPaymentDataError(e))
    })
}

export const getPaymentData=()=>(dispatch)=>{
    dispatch(getPaymentDataRequest());
    return axios
    .get('https://meesho-clone-tau.vercel.app/payment')
    .then((res)=>dispatch(getPaymentDataSuccess(res.data)))
    .catch((error)=>{
        dispatch(getPaymentDataError(error))
    }) 
}