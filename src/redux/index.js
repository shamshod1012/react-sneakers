import { createStore } from "redux";
import { sneakesReducer } from "./sneakersReducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

export const store = createStore(sneakesReducer, applyMiddleware(thunk));
