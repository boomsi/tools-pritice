function reducerFunc1(state = { age: 1 }, action = {}) {
  switch (action.type) {
    case "INCREASE":
      return { ...state, age: state.age + action.payload };
    case "REDUCE":
      return { ...state, age: state.age - action.payload };
    default:
      return state;
  }
}

function reducerFunc2(state = { age: 1 }, action = {}) {
  switch (action.type) {
    case "ADD":
      return { ...state, age: state.age + action.payload };
    case "POP":
      return { ...state, age: state.age - action.payload };
    default:
      return state;
  }
}

export { reducerFunc1, reducerFunc2 };
