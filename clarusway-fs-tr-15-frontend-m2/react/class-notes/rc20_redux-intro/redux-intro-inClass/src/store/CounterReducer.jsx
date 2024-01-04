const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
        return {count: state.count +1}
      break;
    case "DEC":
        return {count: state.count +1}
      break;
    case "CLR":
        return {count:0}
      break;

    default:
        return state
      break;
  }
};
