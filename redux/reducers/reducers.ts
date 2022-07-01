import { combineReducers } from "redux";
import { user } from "./userReducers";
import { image } from "./imageReducer";
import { singleimage } from "./singleImageReducer";
import { yourimage } from "./yourImageReducer";
import { savedimage } from "./savedImageReducer";
import { searchimage } from "./searchImageReducer";
import { categoryimage } from "./categoryImageReducer";

const reducers = combineReducers({
  user: user,
  image: image,
  singleimage: singleimage,
  yourimage: yourimage,
  savedimage: savedimage,
  searchimage: searchimage,
  categoryimage: categoryimage,
});

export default reducers;
