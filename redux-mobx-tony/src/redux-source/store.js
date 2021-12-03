import { createStore, combineReducers, applyMiddleware } from "./redux";
import { reducerFunc1, reducerFunc2 } from "./reducer";
import logger from "./middleware";

const reducer = combineReducers({ reducerFunc2, reducerFunc1 });

const store = createStore(reducer);
// const store = createStore(reducer, applyMiddleware(logger));

export default store;
