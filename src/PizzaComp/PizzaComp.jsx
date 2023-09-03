import styles from "./PizzaComp.module.css";
import React from "react";
const PizzaParametrs = (props) => {
  let [state, setState] = React.useState(8);
  let [stateType, setStateType] = React.useState(9);
  const pizzaNames = ['Тонкое', 'Традиционное'];
  let statable = false;
  return (
    <div className={styles.pizzaOptions}>
      <div className={styles.stage1}>
      {props.types.map((el,index) =>(
        <p key={index}  onClick={() => {setStateType(stateType = index)}} className={((stateType === index) && statable===true) ?([styles.first, styles.active].join(" ")): styles.first}>{pizzaNames[index]}</p>
      ))}
      </div>
      <div className={styles.stage2}>
        {props.sizes.map((el,index) =>(
          <p key={index} onClick={() => {setState(state=Number(index))}} className={state===Number(index) ?([styles.third, styles.active].join(" ")): styles.third}>{el} см.</p>
        ))}
      </div>
    </div>
  );
};
const PizzaComp = (pizzas) => {
  
  return (
    <div className={styles.center}>
      <div className={styles.mainImg}>
        <img src={pizzas.imageUrl + ""} alt="#" className={styles.img}></img>
      </div>
      <div className={styles.mainInfo}>
        <h2>{pizzas.title}</h2>
        <PizzaParametrs types={pizzas.types} sizes={pizzas.sizes} key={pizzas.id}></PizzaParametrs>
        <div className={styles.price}>От {pizzas.price}</div>
      </div>
    </div>
  );
};

export default PizzaComp;

// {pizzas.types.map((arr)=>{
//   if(arr.length == 2){

//   }
// })}
