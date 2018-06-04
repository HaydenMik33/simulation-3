import axios from "axios";
const USER_INFO = "USER_INFO";
export function userInfo(user) {
  return {
    type: USER_INFO,
    payload: user
  };
}

const initialState = {
  user: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    // case `${GET_USER}_PENDING`:
    //   return {
    //   };
    case USER_INFO:
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
}
