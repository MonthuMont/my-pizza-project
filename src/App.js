import logo from "./logo.svg";
import "./App.scss";
import React from "react";
function App() {
  const [count, setCount] = React.useState(0);
  const countOnClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <button onClick={countOnClick}>Increment</button>
          <button onClick={() => {setCount(count-1)}}>Decrement</button>
          <span>{count}</span>
        </div>
      </header>
    </div>
  );
}

export default App;
