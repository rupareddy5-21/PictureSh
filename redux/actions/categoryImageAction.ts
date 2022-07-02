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

export const likeImageCategories =
  (imageId: number, cookie: string) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.likeImage(imageId, cookie);
      dispatch({
        type: "LIKE_IMAGE_CATEGORIES",
        payload: data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
