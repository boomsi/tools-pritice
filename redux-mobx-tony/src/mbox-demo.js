import { observer } from "mobx-react";

function MobxDemo(props) {
  const { timer } = props;

  return (
    <div className="App">
      <header className="App-header">
        <p
          onClick={() => {
            timer.increase();
            
          }}
          onDoubleClick={() => {
            timer.reset();
          }}
        >
          {timer.second}
        </p>
      </header>
    </div>
  );
}

export default MobxDemo
