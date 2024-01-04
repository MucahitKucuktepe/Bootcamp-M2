import { legacy_createStore as createStore, combineReducers} from "redux"
import {counterReducer} from "./CounterReducer"

export const store=createStore(counterReducer)

