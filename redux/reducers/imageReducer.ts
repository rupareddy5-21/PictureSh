import { ImageType } from "../../utils/types";

type State = {
  imageData: ImageType[];
};

export const image = (state: State = { imageData: [] }, action: any) => {
  switch (action.type) {
    case "GET_ALLIMAGES":
      return { ...state, imageData: action.payload };
    case "UPLOAD_IMAGE":
      return { ...state, imageData: [...state.imageData, action.payload] };
    case "DELETE_IMAGE":
      return {
        ...state,
        imageData: state.imageData.filter(
          (image) => image.id !== action.payload
        ),
      };
    case "LIKE_IMAGE_ALL":
      return {
        ...state,
        imageData: state.imageData?.map((image) =>
          image.id === action.payload.id ? action.payload : image
        ),
      };
    case "SAVE_IMAGE_ALL":
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
