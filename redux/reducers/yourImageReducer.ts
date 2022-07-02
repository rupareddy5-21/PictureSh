import { ImageType } from "../../utils/types";

type State = {
  imageData: ImageType[];
};

export const yourimage = (state: State = { imageData: [] }, action: any) => {
  switch (action.type) {
    case "GET_YOURIMAGES":
      return { ...state, imageData: action.payload };
    case "LIKE_IMAGE_YOUR":
      return {
        ...state,
        imageData: state.imageData?.map((image) =>
          image.id === action.payload.id ? action.payload : image
        ),
      };
    case "SAVE_IMAGE_YOUR":
      return {
        ...state,
        imageData: state.imageData?.map((image) =>
          image.id === action.payload.id ? action.payload : image
        ),
      };
    default:
      return state;
  }
};
