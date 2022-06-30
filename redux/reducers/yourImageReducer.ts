import { ImageType } from "../../utils/types";

type State = {
  imageData: ImageType[];
};

export const yourimage = (state: State = { imageData: [] }, action: any) => {
  switch (action.type) {
    case "GET_YOURIMAGES":
      return { ...state, imageData: action.payload };
    default:
      return state;
  }
};
