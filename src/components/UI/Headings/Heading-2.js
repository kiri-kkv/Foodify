import classes from "./Heading-2.module.css";
import classNames from "classnames";

const Heading2 = (props) => {
  const style = classNames(classes["heading-secondary"], props.style);
  return <h2 className={style}>{props.text}</h2>;
};

export default Heading2;
