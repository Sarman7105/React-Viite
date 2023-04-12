import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import sCounterReducer from "./staticCounter/staticCounterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  staticCounter: sCounterReducer,
});

export default rootReducer;
