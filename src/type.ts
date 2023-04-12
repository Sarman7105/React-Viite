import { ICounterState } from "./redux/counter/type";
import { ISCounterState } from "./redux/staticCounter/type";

export interface IState {
  counter: ICounterState;
  staticCounter: ISCounterState;
}
