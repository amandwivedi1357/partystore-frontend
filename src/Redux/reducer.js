import {
  GETUSER_REQ,
  GETUSER_SUCCESS,
  GETUSER_FAILURE,
  GETCART_REQ,
  GETCART_SUCCESS,
  GETCART_FAILURE,
  GETWISHLIST_REQ,
  GETWISHLIST_SUCCESS,
  GETWISHLIST_FAILURE,
} from "./actionTypes";

const initState = {
  user: null,
  cart:null,
  wishlist:null,
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, action) => {
  // switch statement for different actions
  console.log(state, action);
  switch (action.type) {
    case GETUSER_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case GETUSER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case GETUSER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    //user cart

    case GETCART_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case GETCART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
        isLoading: false,
      };
    case GETCART_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    //user wishlist

    case GETWISHLIST_REQ:
      return {
        ...state,
        isLoading: true,
      };
    case GETWISHLIST_SUCCESS:
      return {
        ...state,
        wishlist: action.payload,
        isLoading: false,
      };
    case GETWISHLIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
