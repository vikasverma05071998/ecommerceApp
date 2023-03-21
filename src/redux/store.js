import { createStore } from "redux";
import rootReducers from "./reducer";
const store=createStore(rootReducers);
console.log(store);
export default store;
