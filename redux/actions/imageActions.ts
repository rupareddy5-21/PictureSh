import { Dispatch } from "redux";
import * as api from "../../utils/api";
import { CreateImageType } from "../../utils/types";

export const getAllImages = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.getAllImages();
    dispatch({
      type: "GET_ALLIMAGES",
      payload: data,
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const uploadImage =
  (databoi: CreateImageType) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.uploadImage(databoi);
      dispatch({
        type: "UPLOAD_IMAGE",
        payload: data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
