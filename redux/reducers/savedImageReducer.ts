import { ImageType } from "../../utils/types";

type State = {
  imageData: ImageType[];
};

export const savedimage = (state: State = { imageData: [] }, action: any) => {
  switch (action.type) {
    case "GETSAVED_IMAGES":
      return { ...state, imageData: action.payload };
    case "LIKE_IMAGE_SAVED":
      return {
        ...state,
        imageData: state.imageData?.map((image) =>
          image.id === action.payload.id ? action.payload : image
        ),
      };
    case "SAVE_IMAGE_SAVED":
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
