export const savedimage = (state = { imageData: null }, action: any) => {
  switch (action.type) {
    case "GETSAVED_IMAGES":
      return { ...state, imageData: action.payload };
    default:
      return state;
  }
};
