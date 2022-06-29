import { Dispatch } from "redux";
import * as api from "../../utils/api";

export const getSingleImage =
  (imageId: number) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.getSingleImage(imageId);
      dispatch({
        type: "GET_SINGLEIMAGE",
        payload: data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
