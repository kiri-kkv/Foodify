import classes from "./HeaderCartButton.module.css";
import svg from "../../assets/sprite.svg";
import { useSelector } from "react-redux";

const HeaderCartButton = (props) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <button onClick={props.onClick} className={classes.btn}>
      <svg className={classes.btn__icon}>
        <use xlinkHref={`${svg}#icon-shopping-cart`}></use>
      </svg>
      <p className={classes.btn__text}>Your Cart</p>
      <div className={classes.btn__total}>
        <span>{totalQuantity}</span>
      </div>
    </button>
  );
};

export default HeaderCartButton;
