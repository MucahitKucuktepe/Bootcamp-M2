import { legacy_createStore as createStore, combineReducers } from "redux";
import { counterReducer } from "./CounterReducer";
import { todoReducer } from "./TodoReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
// export const store=createStore(counterReducer)

const rootReducer = combineReducers({
  todo: todoReducer,
  counter: counterReducer,
});
export const store = createStore(
  rootReducer,
  process.env.NODE_ENV === "development" && composeWithDevTools()
);
