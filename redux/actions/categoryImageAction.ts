import { Dispatch } from "redux";
import * as api from "../../utils/api";

export const getCategoryImages =
  (category: string, cookie: string) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.getCategoryImages(category, cookie);
      dispatch({
        type: "GET_CAREGORYIMAGES",
        payload: data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
