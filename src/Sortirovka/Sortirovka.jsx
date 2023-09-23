import React, { useState } from "react";
import styles from "./Sortirovka.module.css";
const Sortirovka = () => {
  const [open, setOpen] = useState(false);
  const [closeList,setCloseList] = React.useState(false);
  const list = ['популярности', 'цене','алфавиту'];
  const [selected,setSelected] = React.useState(0);
  let [state,setState] = React.useState(5);
  return (
    <>
      <div className={styles.main}>
        <span
          onClick={() => {
            setOpen(!open);
            setCloseList(!closeList)
          }}
          className={styles.h1}
        >
          Сортировать по:  {list[state]}
        </span>

        {open && (
          <div className={styles.flex}>
          {list.map((el,index) => (
            <span onClick={() => {
              setState((state = Number(index)));
              // setCloseList(!closeList)
              setOpen(!open)
            }}
            className={
              state === Number(index)
                ? [styles.h2, styles.active].join(" ")
                : styles.h2
            } >{list[index]}</span>
          ))}
            
            {/* <span className={styles.h2}>популярности</span>
            <span className={styles.h2}> алфавиту</span> */}
          </div>
        )}
      </div>
    </>
  );
};
export default Sortirovka;
