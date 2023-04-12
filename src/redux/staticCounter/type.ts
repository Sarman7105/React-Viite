import { AnyAction } from "redux";
export interface ISCounterAction extends AnyAction {
  type: string;
}

export interface ISCounterState {
  value: number;
}
