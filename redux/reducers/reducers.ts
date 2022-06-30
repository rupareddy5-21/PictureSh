import { combineReducers } from "redux";
import { user } from "./userReducers";
import { image } from "./imageReducer";
import { singleimage } from "./singleImageReducer";
import { yourimage } from "./yourImageReducer";

const reducers = combineReducers({
  user: user,
  image: image,
  singleimage: singleimage,
  yourimage: yourimage,
});

export default reducers;
