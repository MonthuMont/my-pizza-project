import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import List from './List';
import PizzaComp from './PizzaComp/PizzaComp';
import pizzas from "./Json/pizzasInfo.json"
import Sortirovka from './Sortirovka/Sortirovka';
const root = ReactDOM.createRoot(document.getElementById('root'));
const cars = ['Bmw','Audi','Toyota','Mitsubishi','Lada','Cock','Wazup']
root.render(
  <React.StrictMode>
    <App />
    <List cars = {cars}></List>
    <Sortirovka></Sortirovka>
    {pizzas.map((obj)=>(
      <PizzaComp key={obj.id} title={obj.title} types={obj.types} sizes={obj.sizes} price={obj.price} imageUrl={obj.imageUrl}></PizzaComp>
    ))}
    {/* <PizzaComp ></PizzaComp> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
