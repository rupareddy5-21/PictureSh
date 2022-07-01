import { combineReducers } from "redux";
import { user } from "./userReducers";
import { image } from "./imageReducer";
import { singleimage } from "./singleImageReducer";
import { yourimage } from "./yourImageReducer";
import { savedimage } from "./savedImageReducer";

const reducers = combineReducers({
  user: user,
  image: image,
  singleimage: singleimage,
  yourimage: yourimage,
  savedimage: savedimage,
});

export default reducers;
