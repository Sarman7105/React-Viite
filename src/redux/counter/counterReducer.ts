import { DECREMENT, INCREMENT } from "./actionTypes";
import { ICounterAction, ICounterState } from "./type";

const initialState: ICounterState = {
  value: 0,
};
const counterReducer = (state = initialState, action: ICounterAction) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
};
export default counterReducer;
