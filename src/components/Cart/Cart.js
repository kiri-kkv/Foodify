import classes from "./Cart.module.css";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";
import Modal from "../UI/Modal/Modal";
import { Fragment } from "react";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const amount = totalAmount.toString();

  const cart = (
    <Fragment>
      {items.map((item) => (
        <CartItems
          key={item.id}
          item={{
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          }}
        />
      ))}
      <div className={classes.priceinfo}>
        <p className={classes.priceinfo__text}>Total Amount</p>
        <p className={classes.priceinfo__amount}>${amount}</p>
      </div>
      <Link className={classes.btn}>Order</Link>
    </Fragment>
  );
  return <Modal onCloseCart={props.onCloseCart}>{cart}</Modal>;
};

export default Cart;
