import styles from "./Korzina.module.css";
import { Route, Routes, Link } from "react-router-dom";
const Korzina = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrap}>
        <div className={styles.logoBlock}>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <span className={styles.logoName}>React Pizza</span>
            <p className={styles.description}>
              самая вкусная пицца во вселенной
            </p>
          </Link>
        </div>
      </div>

      <span className={styles.korz}>
        <Link to="/korzina" style={{ textDecoration: 'none' }}>Корзина</Link>
      </span>
    </div>
  );
};
export default Korzina;
