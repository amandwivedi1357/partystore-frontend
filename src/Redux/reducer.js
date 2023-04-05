import {
  GETUSER_REQ,
  GETUSER_SUCCESS,
  GETUSER_FAILURE
} from "./actionTypes";

const initState = {
  user: null,
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
    default:
      return state;
  }
};
