import { combineReducers } from "redux";
import { user } from "./userReducers";

const reducers = combineReducers({
  user:user,
});

export default reducers;
