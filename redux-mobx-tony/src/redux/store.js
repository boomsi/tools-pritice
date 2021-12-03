import { createStore, combineReducers, applyMiddleware } from "redux";
import { counterReducer1, counterReducer2 } from "./reducer";

function logger(store) {
  return function (next) {
    return function (action) {
      console.group(action.type);
      console.info("dispatching", action);
      let result = next(action);
      console.log("next state", store.getState());
      console.groupEnd();
      return result;
    };
  };
}

const reducer = combineReducers({ counterReducer1, counterReducer2 });
const store = createStore(reducer);
// const store = createStore(reducer, applyMiddleware(logger));

export default store;
