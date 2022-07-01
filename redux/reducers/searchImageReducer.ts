export const searchimage = (state = { imageData: null }, action: any) => {
  switch (action.type) {
    case "GET_SEARCHIMAGES":
      return { ...state, imageData: action.payload };
    default:
      return state;
  }
};
