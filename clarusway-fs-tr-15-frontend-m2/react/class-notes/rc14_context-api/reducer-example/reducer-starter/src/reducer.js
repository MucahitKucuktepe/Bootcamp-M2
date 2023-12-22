export const initialState = {
  loading: false,
  catImage: "",
  error: "",
};

export const reducer = (initialState, action) => {
  switch (action.type) {
    case "START":
      return { ...initialState, loading: true };
      break;
    case "SUCCESS":
      return {
        ...initialState,
        catImage: action.payload,
        loading: false,
        error: "",
      };
      break;
    case "FAİL":
      return {
        ...initialState,
        catImage: "",
        loading: false,
        error: action.payload,
      };
      break;

    default:
      break;
  }
};
