import { Middleware, Dispatch, AnyAction } from "redux";
import { ICounterAction, ICounterState } from "../counter/type";
import { ISCounterAction, ISCounterState } from "../staticCounter/type";
import rootReducer from "../rootReducer";

interface RootState {
  counter: ICounterState;
  staticCounter: ISCounterState;
}

type AppAction = ICounterAction | ISCounterAction;
type AppDispatch = Dispatch<AppAction>;
const logger: Middleware<{}, RootState, AppDispatch> =
  (store) => (next) => (action) => {
    console.log(`The action dispatched is `, action);
    console.log(`Current state is: `, store.getState());
    const result = [action].reduce(rootReducer, store.getState());
    console.log("Next state will be: ", result);
    next(action);
  };
export default logger;
