import React, { useState } from "react";
import styles from "./Sortirovka.module.css";
const Sortirovka = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.main}>
        <span
          onClick={() => {
            setOpen(!open);
          }}
          className={styles.h1}
        >
          Сортировать по:
        </span>

        {open && (
          <div className={styles.flex}>
            <span className={styles.h2}>По цене</span>
            <span className={styles.h2}>По популярности</span>
            <span className={styles.h2}>По алфавиту</span>
          </div>
        )}
      </div>
    </>
  );
};
export default Sortirovka;
