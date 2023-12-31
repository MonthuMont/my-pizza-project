import styles from "./PizzaComp.module.css";
import React from "react";
const PizzaParametrs = (props) => {
  let [state, setState] = React.useState(8);
  let [stateType, setStateType] = React.useState(9);
  const pizzaNames = ["Тонкое", "Традиционное"];
  const [open, setOpen] = React.useState(false);
  const [choose, setChoose] = React.useState(false);
  let statable = true;
  // let bool = () => {
  //   return statable = !statable;
  // };
  return (
    <div className={styles.pizzaOptions}>
      <div className={styles.stage1}>
        {props.types.map((el, index) => (
          <p
            onClick={() => {
              setStateType((stateType = Number(index)));
              // bool();
              setOpen(!open);
            }}
            className={
              stateType === index && open
                ? [styles.first, styles.active].join(" ")
                : styles.first
            }
          >
            {pizzaNames[index]}
          </p>
        ))}
      </div>
      <div className={styles.stage2}>
        {props.sizes.map((el, index) => (
          <p
            onClick={() => {
              setState((state = Number(index)));
              setChoose(!choose);
            }}
            className={
              state === Number(index) && choose
                ? [styles.third, styles.active].join(" ")
                : styles.third
            }
          >
            {el} см.
          </p>
        ))}
      </div>
    </div>
  );
};
const PizzaComp = (pizzas) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.center}>
        <div className={styles.mainImg}>
          <img src={pizzas.imageUrl + ""} alt="#" className={styles.img}></img>
        </div>
        <div className={styles.mainInfo}>
          <h2>{pizzas.title}</h2>
          <PizzaParametrs
            types={pizzas.types}
            sizes={pizzas.sizes}
            key={pizzas.id}
          ></PizzaParametrs>
          <div className={styles.wrap}>
            <div className={styles.price}>От {pizzas.price}</div>
            <div>
              <button className={styles.btn}>Купить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaComp;

// {pizzas.types.map((arr)=>{
//   if(arr.length == 2){

//   }
// })}
