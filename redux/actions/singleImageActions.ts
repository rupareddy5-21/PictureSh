import { Dispatch } from "redux";
import * as api from "../../utils/api";
import { CreateCommentType } from "../../utils/types";

export const getSingleImage =
  (imageId: number, cookie: string) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.getSingleImage(imageId, cookie);
      dispatch({
        type: "GET_SINGLEIMAGE",
        payload: data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };

export const addComment =
  (databoi: CreateCommentType, cookie: string, imageId: number) =>
  async (dispatch: Dispatch) => {
    try {
      const { data } = await api.addComment(databoi, cookie, imageId);
      dispatch({
        type: "ADD_COMMENT",
        payload: data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };

export const likeImage =
  (imageId: number, cookie: string) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.likeImage(imageId, cookie);
      dispatch({
        type: "LIKE_IMAGE",
        payload: data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };

export const saveImage =
  (imageId: number, cookie: string) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.saveImage(imageId, cookie);
      dispatch({
        type: "SAVE_IMAGE",
        payload: data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
