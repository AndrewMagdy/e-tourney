import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "../reducers";
import initialState from "../constants/initialState";

export const history = createBrowserHistory();

let store = null;

store = createStore(
  createRootReducer(history),
  initialState,
  compose(applyMiddleware(routerMiddleware(history), thunk))
);

export default store;
