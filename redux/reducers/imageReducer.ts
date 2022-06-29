export const image = (state = { imageData: [] }, action: any) => {
  switch (action.type) {
    case "GET_ALLIMAGES":
      return { ...state, imageData: action.payload };
    case "UPLOAD_IMAGE":
      return { ...state, imageData: [...state.imageData, action.payload] };
    default:
      return state;
  }
};
