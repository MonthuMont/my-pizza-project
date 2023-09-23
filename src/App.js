import logo from "./logo.svg";
import "./App.scss";
import React from "react";

import List from "./List";
import PizzaComp from "./PizzaComp/PizzaComp";
// import pizzas from "./Json/pizzasInfo.json";
import Sortirovka from "./Sortirovka/Sortirovka";
const cars = ["Bmw", "Audi", "Toyota", "Mitsubishi", "Lada", "Cock", "Wazup"];
function App(props) {
  const [count, setCount] = React.useState(0);
  const countOnClick = () => {
    setCount(count + 1);
  };
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch("https://64f981f24098a7f2fc1484a0.mockapi.io/items")
      .then((res) => res.json())
      .then((arr) => {
        console.log(arr);
        console.log('Hello');
        

        setItems(arr);
        console.log("Items:", items);
      });
  }, []);

  

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
      <Sortirovka></Sortirovka>
      <div className="container">
        <div className="wrapper">
          {items.map((obj) => (
            <PizzaComp
              key={obj.id}
              title={obj.title}
              types={obj.types}
              sizes={obj.sizes}
              price={obj.price}
              imageUrl={obj.imageUrl}
            ></PizzaComp>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
