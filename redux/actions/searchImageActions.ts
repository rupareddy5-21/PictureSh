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

export const likeImageSearch =
  (imageId: number, cookie: string) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.likeImage(imageId, cookie);
      dispatch({
        type: "LIKE_IMAGE_SEARCH",
        payload: data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };

export const saveImageSearch =
  (imageId: number, cookie: string) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.saveImage(imageId, cookie);
      dispatch({
        type: "SAVE_IMAGE_SEARCH",
        payload: data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
