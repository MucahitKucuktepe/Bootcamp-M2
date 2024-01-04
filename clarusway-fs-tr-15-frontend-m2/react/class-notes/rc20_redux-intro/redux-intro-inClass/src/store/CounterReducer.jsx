const initialState = {
  count: 10,
};

//? Type ların constant olarak belirlenmesi
export const INC="INC"
export const DEC="DEC"
export const CLR="CLR"

//?Action Creater fonksiyonlarının tanımlanması
export const increment=()=>{
  return {type:INC}
}
export const decrement=()=>{
  return {type:DEC}
}
export const clear=()=>{
  return {type:CLR}
}

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC:
        return {count: state.count +1}
      break;
    case DEC:
        return {count: state.count -1}
      break;
    case CLR:
        return {count:0}
      break;

    default:
        return state
      break;
  }
};
