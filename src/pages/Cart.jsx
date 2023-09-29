import React from "react";
import styles from "./Cart.module.css";
const Cart = () => {
  const [count, setCount] = React.useState();
  //   const proverka = () =>
  //     count <= 0 ? setCount(0) : setCount(count);

  return (
    <>
      <CartBar></CartBar>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.imgBlock}>
            <img
              className={styles.img}
              alt="Pizza"
              src="https://cdn-icons-png.flaticon.com/512/2836/2836640.png"
            ></img>
          </div>
          <div className={styles.infoBlock}>
            <div className={styles}>
              <span>Данные о пицце</span>
              <div>
                <button
                  onClick={() => setCount(count + 1)}
                  className={styles.btn}
                >
                  Добавить
                </button>
                <button
                  onClick={() => {
                    setCount(0);
                    //   proverka();
                  }}
                  className={styles.btn}
                >
                  Очистить
                </button>
              </div>

              <span className={styles.count}>Количество:{count}</span>
            </div>
          </div>
        </div>
      </div>
      
      
    </>
  );
};
export default Cart;
const CartBar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <button className={styles.btn}>Оплатить сейчас</button>
        <div className={styles.wrap}>
          <span>Текущая цена:</span>
          <span>Кол-во товаров:</span>
        </div>
      </nav>
    </>
  );
};
