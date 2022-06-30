import { combineReducers } from "redux";
import { user } from "./userReducers";
import { image } from "./imageReducer";
import { singleimage } from "./singleImageReducer";

const reducers = combineReducers({
  user: user,
  image: image,
  singleimage:singleimage
});

export default reducers;
