import { INCREASE, REDUCE } from "./action";

const initialState1 = {
  count: 0,
};
const initialState2 = {
  count: 0,
};

export function counterReducer1(state = initialState1, { type, value }) {
  switch (type) {
    case INCREASE:
      return { ...state, count: value ? value : state.count + 1 };
    default:
      return state;
  }
}

export function counterReducer2(state = initialState2, { type, value }) {
  switch (type) {
    case REDUCE:
      return { ...state, count: value ? value : state.count - 1 };
    default:
      return state;
  }
}
