import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (prosp) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Melas</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="table full of food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
