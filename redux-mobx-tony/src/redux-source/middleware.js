function logger(store) {
  return function (next) {
    return function (action) {
      console.group(action.type);
      console.info("dispatching", action);
      let result = next(action);
      console.log("next state", store.getState());
      console.groupEnd();
      return result;
    };
  };
}

export default logger;
