import { Dispatch } from "redux";
import * as api from "../../utils/api";

export const getSingleImage =
  (imageId: number,cookie:string) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.getSingleImage(imageId,cookie);
      dispatch({
        type: "GET_SINGLEIMAGE",
        payload: data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
