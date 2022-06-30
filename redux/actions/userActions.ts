import { Dispatch } from "redux";
import * as api from "../../utils/api";

export const getUsers = (userId: string) => async (dispatch: Dispatch) => {
  try {
    const { data } = await api.getUser(userId);
    dispatch({
      type: "GET_USER",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
