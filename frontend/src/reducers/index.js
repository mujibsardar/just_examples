import { combineReducers } from "redux";
import authReducer from "./authReducers";
import exampleReducer from "./exampleReducers";
import errorReducer from "./errorReducers";

export default combineReducers({
  auth: authReducer,
  examples: exampleReducer,
  errors: errorReducer
});
