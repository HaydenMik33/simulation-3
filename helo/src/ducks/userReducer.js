import axios from "axios";
const GET_USER = "GET_USER";
export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get("/api/auth/login")
  };
}

const initialState = {
  user: {}
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_PENDING`:
      return {
        link: "https://media.giphy.com/media/l3E6oxUBsPufSXVLi/giphy.gif"
      };
    case `${GET_USER}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data
      };

    default:
      return state;
  }
}
