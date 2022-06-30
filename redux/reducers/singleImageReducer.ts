export const singleimage = (state = { imageData: null }, action: any) => {
  switch (action.type) {
    case "GET_SINGLEIMAGE":
      return { ...state, imageData: action.payload };
    default:
      return state;
  }
};
