import { AnyAction } from "redux";
export interface ICounterAction {
  type: string;
  payload: number;
}
export interface ICounterState {
  value: number;
}
