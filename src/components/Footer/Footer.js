import classes from "./Footer.module.css";
import Heading2 from "../UI/Headings/Heading-2";
import svg from "../../assets/sprite.svg";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <section className={classes.footer}>
      <div className={classes.icon}>
        <svg className={classes.icon__img}>
          <use xlinkHref={`${svg}#icon-fastfood`}></use>
        </svg>
        <Heading2 style={classes.heading} text="Foodify" />
      </div>
      <div className={classes.navigation}>
        <div className={classes.info__item}>
          <ul className={classes.info__link}>
            <li>
              <Link to="/" className={classes["info__link-item"]}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/" className={classes["info__link-item"]}>
                Privacy policy
              </Link>
            </li>
            <li>
              <Link to="/" className={classes["info__link-item"]}>
                Work with us
              </Link>
            </li>
            <li>
              <Link to="/" className={classes["info__link-item"]}>
                Terms
              </Link>
            </li>
          </ul>
        </div>
        <p className={classes.info__copyright}>
          &copy; Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Obcaecati, magnam ab? Omnis quibusdam alias accusantium. Quas et ut,
          eum nihil dolor praesentium enim perspiciatis consequatur laudantium
          veritatis tempora tempore corporis.
        </p>
      </div>
    </section>
  );
};

export default Footer;
