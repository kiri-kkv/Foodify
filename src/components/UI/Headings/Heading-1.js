import classes from "./Heading-1.module.css";

const Heading1 = (propps) => {
  return <h1 className={classes["heading-primary"]}>{propps.text}</h1>;
};

export default Heading1;
