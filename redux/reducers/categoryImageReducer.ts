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
    case "LIKE_IMAGE_CATEGORIES":
      return {
        ...state,
        imageData: state.imageData?.map((image) =>
          image.id === action.payload.id ? action.payload : image
        ),
      };
    case "SAVE_IMAGE_CATEGORIES":
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
