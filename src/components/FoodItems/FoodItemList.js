import classes from "./FoodItemList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import svg from "../../assets/sprite.svg";
import classNames from "classnames";

const FoodItemList = (props) => {
  const { id, name, price } = props;
  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    dispatch(cartActions.addItemsToCart({ id, name, price }));
  };

  return (
    <div className={classes.foodCard}>
      <img
        src={props.img}
        alt="A food item"
        className={classes.foodCard__img}
      />
      <h5 className={classes.foodCard__name}>{name}</h5>
      <div
        className={classNames(classes.foodCard__item, classes.foodCard__price)}
      >
        <svg className={classes.btn__icon}>
          <use xlinkHref={`${svg}#icon-coin-dollar`}></use>
        </svg>
        <p>
          <span>{price}</span>
        </p>
      </div>

      <div
        className={classNames(
          classes.foodCard__item,
          classes.foodCard__ordered
        )}
      >
        <svg className={classes.btn__icon}>
          <use xlinkHref={`${svg}#icon-users`}></use>
        </svg>
        <p>
          <span>{props.ordered}k+</span>
        </p>
      </div>

      <div
        className={classNames(classes.foodCard__item, classes.foodCard__time)}
      >
        <svg className={classes.btn__icon}>
          <use xlinkHref={`${svg}#icon-clock`}></use>
        </svg>
        <p>
          <span>{props.time}</span>
        </p>
      </div>

      <div
        className={classNames(classes.foodCard__item, classes.foodCard__type)}
      >
        <svg className={classes.btn__icon}>
          <use
            xlinkHref={`${svg}#${
              props.type.toUpperCase() === "VEG" ? "icon-leaf" : "icon-bowl"
            }`}
          ></use>
        </svg>
        <p>
          <span>{props.type}</span>
        </p>
      </div>

      <button onClick={addItemToCartHandler} className={classes.foodCard__btn}>
        Add to cart
      </button>
    </div>
  );
};

export default FoodItemList;
