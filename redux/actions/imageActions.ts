import { NextRouter } from "next/router";
import { Dispatch } from "redux";
import * as api from "../../utils/api";
import { CreateImageType } from "../../utils/types";
import { toast } from "react-toastify";

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
      toast.success("Image uploaded", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        theme: "dark",
      });
      router.push("/");
      dispatch({
        type: "UPLOAD_IMAGE",
        payload: data,
      });
    } catch (error: any) {
      toast.error(error?.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

export const deleteImage =
  (imageId: number, router: NextRouter, cookie: string) =>
  async (dispatch: Dispatch) => {
    try {
      const { data } = await api.deleteImage(imageId, cookie);
      toast.success("Image deleted", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        theme: "dark",
      });
      router.push("/");
      dispatch({
        type: "DELETE_IMAGE",
        payload: imageId,
      });
    } catch (error: any) {
      toast.error(error?.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        theme: "dark",
      });
      console.log(error);
    }
  };

export const likeImageAll =
  (imageId: number, cookie: string) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.likeImage(imageId, cookie);
      dispatch({
        type: "LIKE_IMAGE_ALL",
        payload: data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };

export const saveImageAll =
  (imageId: number, cookie: string) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.saveImage(imageId, cookie);
      dispatch({
        type: "SAVE_IMAGE_ALL",
        payload: data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
