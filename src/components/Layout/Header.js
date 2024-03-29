import react from "react";

import mealsImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";

import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Zomato</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} />
      </div>
    </>
  );
};

export default Header;
