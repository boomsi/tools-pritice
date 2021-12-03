function createStore(reducer, enhancer) {
  let state = {};
  const scrible = [];

  if (enhancer && typeof enhancer === "function") {
    return enhancer(createStore)(reducer);
  }

  state = Object.assign(state, reducer());

  function subscrible(cb) {
    scrible.push(cb);
  }

  function dispatch(action) {
    state = reducer(state, action);
    for (let cb of scrible) {
      cb();
    }
  }

  function getState() {
    return state;
  }

  return {
    subscrible,
    dispatch,
    getState,
  };
}

function combineReducers(reducerMap = {}) {
  const keys = Object.keys(reducerMap);

  return (state = {}, action = {}) => {
    keys.forEach((key) => {
      state[key] = reducerMap[key](state[key], action);
    });
    return state;
  };
}

function applyMiddleware(...middleware) {
  return function enhancer(createStore) {
    return function newCreateStore(reducer) {
      const store = createStore(reducer);
      const { dispatch } = store;
      const chain = middleware.map(middle => middle(store))
      const newDispatchGen = compose(...chain)
      const newDispatch = newDispatchGen(dispatch);

      return { ...store, dispatch: newDispatch };
    };
  };
}

function compose(...func) {
  return func.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
}

export { createStore, combineReducers, applyMiddleware };
