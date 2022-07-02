import * as api from "../../utils/api";
import { Dispatch } from "redux";

export const getSavedImages =
  (cookie: string) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.getSavedImages(cookie);
      dispatch({
        type: "GETSAVED_IMAGES",
        payload: data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };

export const likeImageSaved =
  (imageId: number, cookie: string) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.likeImage(imageId, cookie);
      dispatch({
        type: "LIKE_IMAGE_SAVED",
        payload: data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
