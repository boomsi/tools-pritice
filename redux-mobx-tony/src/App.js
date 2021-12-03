import { useContext } from "react";
import { observer } from "mobx-react";

import useReducer from "./hook/useReducer";
import context from "./context/useContext";
import "./App.css";

import timer from "./mobx/index";
import ReduxDemo from "./redux-demo";
import MobxDemo from "./mbox-demo";
import ReduxTest from "./redux-source";

function App() {
  const [val, dispatch] = useReducer(1);
  const theme = useContext(context);

  return (
    <div className="App">
      <header className="App-header">
        <p
          onClick={() => {
            dispatch("add", 2);
          }}
        >
          {val}
          {theme.color}
          <br />
        </p>
      </header>
      Redux:
      <ReduxDemo />
      {/* Mbox:{timer.second} */}
      {/* <MobxDemo timer={timer} /> */}
      Redux Test:
      <ReduxTest />
    </div>
  );
}

export default observer(App);
