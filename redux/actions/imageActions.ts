import { NextRouter } from "next/router";
import { Dispatch } from "redux";
import * as api from "../../utils/api";
import { CreateImageType } from "../../utils/types";

export const getAllImages = (cookie: string) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.getAllImages(cookie);
    dispatch({
      type: "GET_ALLIMAGES",
      payload: data,
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const uploadImage =
  (
    databoi: CreateImageType,
    cookie: string,
    router: NextRouter,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) =>
  async (dispatch: Dispatch) => {
    try {
      const { data } = await api.uploadImage(databoi, cookie);
      setLoading(false);
      router.push("/");
      dispatch({
        type: "UPLOAD_IMAGE",
        payload: data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };

export const deleteImage =
  (imageId: number, router: NextRouter, cookie: string) =>
  async (dispatch: Dispatch) => {
    try {
      const { data } = await api.deleteImage(imageId, cookie);
      router.push("/");
      dispatch({
        type: "DELETE_IMAGE",
        payload: imageId,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
