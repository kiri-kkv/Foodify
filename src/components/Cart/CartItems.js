import { useDispatch } from "react-redux";
import classes from "./CartItems.module.css";
import { cartActions } from "../../store/cart-slice";

const CartItems = (props) => {
  const { id, name, price, quantity } = props.item;
  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    dispatch(
      cartActions.addItemsToCart({
        id,
        name,
        price,
        quantity,
      })
    );
  };

  const removeItemToCartHandler = () => {
    dispatch(cartActions.removeCartItem({ id, price, quantity }));
  };

  return (
    <div className={classes.cartItems}>
      <div className={classes.cartItems__info}>
        <div>
          <h3 className={classes.cartItems__name}>{name}</h3>
          <p className={classes.cartItems__price}>price:{price}</p>
        </div>
        <p className={classes.cartItems__quantity}>
          X <span>{quantity}</span>
        </p>
      </div>
      <div className={classes.cartItems__btn}>
        <button onClick={addItemToCartHandler}>+</button>
        <button onClick={removeItemToCartHandler}>-</button>
      </div>
    </div>
  );
};

export default CartItems;
