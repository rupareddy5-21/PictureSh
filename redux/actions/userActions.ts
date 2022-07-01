import { Dispatch } from "redux";
import * as api from "../../utils/api";

export const getUsers =
  (userId: string, cookie: string) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.getUser(userId, cookie);
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const followUser =
  (userId: string, cookie: string) => async (dispatch: Dispatch) => {
    try {
      const { data } = await api.followUser(userId, cookie);
      dispatch({
        type: "FOLLOW_USER",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
