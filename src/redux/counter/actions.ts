import { DECREMENT, INCREMENT } from "./actionTypes";

export const increment = (value: number) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
export const decrement = (value: number) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};
