import { createStore } from "redux";
import { sneakesReducer } from "./sneakersReducer";

export const store = createStore(sneakesReducer);
