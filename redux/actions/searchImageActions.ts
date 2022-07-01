import { Dispatch } from "redux";
import * as api from "../../utils/api";

export const getsearchImages =
  (search: string, cookie: string) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.searchImages(search, cookie);
      dispatch({
        type: "GET_SEARCHIMAGES",
        payload: data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
