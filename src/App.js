import logo from "./logo.svg";
import "./App.scss";
import React from "react";
import List from "./List";

import Korzina from "./Korzina/Korzina";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

const cars = [
  "Bmw",
  "Audi",
  "Toyota",
  "Mitsubishi",
  "Lada",
  "Mercedes",
  "Wazup",
];
function App(props) {
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
          <button
            onClick={() => {
              setCount(count - 1);
            }}
          >
            Decrement
          </button>
          <span>{count}</span>
        </div>
      </header>
      <List cars={cars}></List>
      <Korzina></Korzina>
      <Routes>
        
          <Route path="/korzina/" element={<Cart></Cart>}></Route>
        

        <Route path="/home/" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      {/* <Home></Home> */}
    </div>
  );
}
export default App;
