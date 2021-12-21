import React from "react";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <dvi className={classes.total}>
        <span>Toala Amount</span>
        <span>35,5</span>
      </dvi>
      <dvi className={classes.actions}>
        <button className={classes["button--alt"]}>close</button>
        <button className={classes.button}>Order</button>
      </dvi>
    </div>
  );
};

export default Cart;
