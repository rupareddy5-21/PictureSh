import { ImageType } from "../../utils/types";

type State = {
  imageData: ImageType[];
};

export const searchimage = (state: State = { imageData: [] }, action: any) => {
  switch (action.type) {
    case "GET_SEARCHIMAGES":
      return { ...state, imageData: action.payload };
    case "LIKE_IMAGE_SEARCH":
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
