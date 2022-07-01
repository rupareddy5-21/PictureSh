export const user = (
  state = {
    authData: null,
  },
  action: any
) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, authData: action.payload };
    case "FOLLOW_USER":
      return { ...state, authData: action.payload };
    default:
      return state;
  }
};
