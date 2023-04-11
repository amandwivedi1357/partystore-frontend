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

import axios from "axios";


// action for get User request
const getUserReq = () => ({
  type: GETUSER_REQ,
});

// action for get User success

export const getUserSuccess = (payload) => ({
  type: GETUSER_SUCCESS,
  payload,
});

// action for get User failure

const getUserFailure = () => ({
  type: GETUSER_FAILURE,
});


// thunk call to fetch User
export const getUserData =(phone) =>(dispatch) => {
    dispatch(getUserReq());
    console.log(phone)
     axios
       .get(
         `https://angry-leather-jacket-wasp.cyclic.app/auth/login/${
           "+91" + phone
         }`
       )
       .then((res) => dispatch(getUserSuccess(res.data)))
       .catch(() => dispatch(getUserFailure()));
};


// action for get Cart request
const getCartReq = () => ({
  type: GETCART_REQ,
});

// action for get Cart success

export const getCartSuccess = (payload) => ({
  type: GETCART_SUCCESS,
  payload,
});

// action for get Cart failure

const getCartFailure = () => ({
  type: GETCART_FAILURE,
});


// thunk call to fetch Cart
export const getCartData =(id) =>(dispatch) => {
    dispatch(getCartReq());
    console.log(id)
     axios
       .get(`https://angry-leather-jacket-wasp.cyclic.app/cart/${id}`)
       .then((res) => dispatch(getCartSuccess(res.data)))
       .catch(() => dispatch(getCartFailure()));
};

// action for get Wishlist request
const getWishlistReq = () => ({
  type: GETWISHLIST_REQ,
});

// action for get Wishlist success

export const getWishlistSuccess = (payload) => ({
  type: GETWISHLIST_SUCCESS,
  payload,
});

// action for get Wishlist failure

const getWishlistFailure = () => ({
  type: GETWISHLIST_FAILURE,
});


// thunk call to Wishlist Cart

export const getWishlistData = (id) => (dispatch) => {
  dispatch(getWishlistReq());
  console.log(id);
  axios
    .get(`https://angry-leather-jacket-wasp.cyclic.app/wishlist/${id}`)
    .then((res) => dispatch(getWishlistSuccess(res.data)))
    .catch(() => dispatch(getWishlistFailure()));
};