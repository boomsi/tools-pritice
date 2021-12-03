import { useEffect } from "react";
import store from "./redux-source/store";

export default function Test() {
  useEffect(() => {
    store.subscrible(() => {
      console.log(store.getState());
    });
  }, []);

  console.log(store.getState())

  return (
    <div className="App">
      <header className="App-header">
        <p
          onClick={() => {
            store.dispatch({ type: "INCREASE", payload: 2 });
            store.dispatch({ type: "POP", payload: 2 });
          }}
        >
          {store.getState().reducerFunc1.age} - 
          {store.getState().reducerFunc2.age}
        </p>
      </header>
    </div>
  );
}
