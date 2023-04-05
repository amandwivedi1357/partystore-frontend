import {
  GETUSER_REQ,
  GETUSER_SUCCESS,
  GETUSER_FAILURE
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
       .get(`http://localhost:5000/auth/login/${"+91"+phone}`)
       .then((res) => dispatch(getUserSuccess(res.data)))
       .catch(() => dispatch(getUserFailure()));
};
