import { createStore } from "redux";
import {productReducer} from "./Reducers/productReducer";
import { composeWithDevTools } from "@redux-devtools/extension"
export const store = createStore(productReducer, composeWithDevTools())
console.log(store);
