import store from "./redux/store";
import { connect } from "react-redux";
import { INCREASE, REDUCE } from "./redux/action";
import "./App.css";

function ReduxDemo(props) {
  console.log(store.getState())

  store.subscribe(() => console.log(store.getState()))

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code
            onClick={() => {
              store.dispatch({ type: INCREASE });
              store.dispatch({ type: REDUCE });
            }}
          >
            {store.getState().counterReducer1.count} -
            {store.getState().counterReducer2.count}
          </code>
        </p>
      </header>
    </div>
  );
}

// const mapStateToProps = (props, state) => ({ ...props, ...state });
// const mapDispatchToProps = (props, state) => ({ ...props, ...state });

export default ReduxDemo;
// export default connect(mapStateToProps)(ReduxDemo);
