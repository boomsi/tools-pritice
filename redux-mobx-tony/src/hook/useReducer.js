import { useState } from "react";

export default function useReducer(defaultVal) {
  const [val, setVal] = useState(defaultVal);

  function dispatch(type, value) {
    switch (type) {
      case "add":
        setVal(val + value);
        break;
      case "pop":
        setVal(val - value);
    }
  }

  return [val, dispatch];
}
