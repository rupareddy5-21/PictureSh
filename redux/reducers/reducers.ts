import { combineReducers } from "redux";
import { user } from "./userReducers";
import { image } from "./imageReducer";

const reducers = combineReducers({
  user: user,
  image: image,
});

export default reducers;
