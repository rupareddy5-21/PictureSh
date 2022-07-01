import { ImageType } from "../../utils/types";

type State = {
  imageData: ImageType[];
};

export const categoryimage = (
  state: State = { imageData: [] },
  action: any
) => {
  switch (action.type) {
    case "GET_CAREGORYIMAGES":
      return { ...state, imageData: action.payload };
    default:
      return state;
  }
};
