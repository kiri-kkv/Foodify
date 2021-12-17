import { NavLink } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton.js";
import classes from "./Header.module.css";

const Header = (props) => {
  const checkBoxChangeHandler = () => {
    const x = document.getElementById("navi-toogle");
    x.checked = false;
  };
  return (
    <div className={classes.header}>
      <input
        type="checkbox"
        id="navi-toogle"
        className={classes.header__checkbox}
      />
      <label htmlFor="navi-toogle" className={classes.header__toggle}>
        <span className={classes.header__icon}>&nbsp;</span>
      </label>
      <div className={classes.background}>&nbsp;</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              onClick={checkBoxChangeHandler}
              to="/Home"
              activeClassName={classes.active}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={checkBoxChangeHandler}
              to="/About-us"
              activeClassName={classes.active}
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={checkBoxChangeHandler}
              to="/Feedback"
              activeClassName={classes.active}
            >
              People Feedback
            </NavLink>
          </li>
        </ul>
      </nav>
      <HeaderCartButton onClick={props.onClick} />
    </div>
  );
};

export default Header;
