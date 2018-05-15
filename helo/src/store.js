import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import userReducer from "./ducks/userReducer";
import postReducer from "./ducks/postReducer";
const store = createStore(
  combineReducers({
    userReducer,
    postReducer
  }),
  applyMiddleware(promiseMiddleware())
);

export default store;
