import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onShowModal={props.onShowModal}>
      {cartItems}
      <div className={classes.total}>
        <span>Toala Amount</span>
        <span>35,5</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onShowModal}>
          close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
