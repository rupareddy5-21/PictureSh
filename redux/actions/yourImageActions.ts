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

export const likeImageYour =
  (imageId: number, cookie: string) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.likeImage(imageId, cookie);
      dispatch({
        type: "LIKE_IMAGE_YOUR",
        payload: data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
