import { SDECREMENT, SINCREMENT } from "./actionsType";

export const sIncrement = () => {
  return {
    type: SINCREMENT,
  };
};
export const sDecrement = () => {
  return {
    type: SDECREMENT,
  };
};
