import { Dispatch } from "redux";
import * as api from "../../utils/api";

export const getYourImages = (cookie: string) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.getYourImages(cookie);
    dispatch({
      type: "GET_YOURIMAGES",
      payload: data,
    });
  } catch (error: any) {
    console.log(error);
  }
};
