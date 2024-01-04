const initialState = {
  todoList: [
    { id: new Date().getTime(), text: "Learn Redux", completed: false },
  ],
};
//?Types
export const ADD = "ADD";
export const DEL = "DEL";
export const CLR = "CLR";
export const TGL = "TGL";

//?Action creator function
export const addTodo = (payload) => ({ type: ADD, payload });
export const clearTodo = () => ({ type: CLR });
export const deleteTodo=(payload)=>({type:DEL, payload})
export const toggleTodo=(payload)=>({type:TGL,payload})

//?Reducer
export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };
    case CLR:
      return initialState;

    case DEL:
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };
    case TGL:
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };

    default:
      return state;
  }
};
