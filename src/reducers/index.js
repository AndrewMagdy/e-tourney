import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import tourneyReducer from "./tourney.reducer";

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    tourneys: tourneyReducer
  });

export default rootReducer;
