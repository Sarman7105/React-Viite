import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "./middlewares/myLogger";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
