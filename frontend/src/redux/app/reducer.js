// NOTE: DO NOT MODIFY the intial state structure in this file.
import* as types from './actionType'
const initialState = {
  product: [],
  cart:[],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState,{type,payload}) => {
  switch(type){
    case types.GET_PRODUCT_DATA_REQUEST:
        return {...state,isLoading:true,isError:false}
    case types.GET_PRODUCT_DATA_SUCCESS:
        return {...state,isLoading:false,isError:false,product:payload}
    case types.GET_PRODUCT_DATA_FAILURE:
        return {...state,isLoading:false,isError:true}
   
        case types.ADD_CART_DATA_REQUEST:
          return {...state,isLoading:true}
    case types.ADD_CART_DATA_SUCCESS:
          return {...state,isLoading:false,cart:[...state.cart,payload]}
    case types.ADD_CART_DATA_ERROR:
          return {...state,isLoading:false,isError:true}


         case types.GET_CART_DATA_REQUEST:
              return {...state,isLoading:true}
         case types.GET_CART_DATA_SUCCESS:
              return {...state,isLoading:false,cart:payload}
         case types.GET_CART_DATA_ERROR:
              return {...state,isLoading:false,isError:true}

              case types.DELETE_CART_DATA_REQUEST:
                return {...state,isLoading:true}
         case types.DELETE_CART_DATA_SUCCESS:
                return {...state,isLoading:false,cart:state.cart.filter(item=>item.id!==payload)}
         case types.DELETE_CART_DATA_ERROR:
                return {...state,isLoading:false,isError:true}
  
  
        default:
      return state;
    }
  }



export { reducer }
