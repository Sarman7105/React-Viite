import { SDECREMENT, SINCREMENT } from "./actionsType";
import { ISCounterAction, ISCounterState } from "./type";

const initialState: ISCounterState = {
  value: 0,
};
const sCounterReducer = (state = initialState, action: ISCounterAction) => {
  switch (action.type) {
    case SINCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case SDECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return state;
  }
};

export default sCounterReducer;
