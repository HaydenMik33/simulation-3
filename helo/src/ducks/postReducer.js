import axios from "axios";
const initialState = {
  posts: [],
  post: {}
};
export default function postReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
