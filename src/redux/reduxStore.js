import { combineReducers, legacy_createStore as createStore } from "redux";
import MainReducer from "./MainReducer";

let reducers = combineReducers({
  main: MainReducer,
});

const store = createStore(reducers);

export default store;
