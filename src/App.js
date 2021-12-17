import { Fragment, useState } from "react";
import classes from "./App.module.css";
import FoodItems from "./components/FoodItems/FoodItems";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/gallery";
import Header from "./components/Header/Header";
import HeaderPicture from "./components/Header/HeaderPicture";
import Cart from "./components/Cart/Cart";
import { Route, Switch, Redirect } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Feedback from "./components/Feedback/Feedback";

function App() {
  const [cart, showCart] = useState(false);
  const showCartHandler = () => {
    showCart(true);
  };
  const closeCartHandler = () => {
    showCart(false);
  };
  return (
    <Fragment>
      {cart && <Cart onCloseCart={closeCartHandler} />}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/Home" />
        </Route>

        <Route path="/Home">
          <div className={classes.container__home}>
            <Header onClick={showCartHandler} />
            <HeaderPicture />
            <FoodItems />
            <Gallery />
            <Footer />
          </div>
        </Route>

        <Route path="/About-us">
          <div className={classes.container__aboutus}>
            <Header onClick={showCartHandler} />
            <AboutUs />
            <Footer />
          </div>
        </Route>
        <Route path="/Feedback">
          <div className={classes.container__feedback}>
            <Header onClick={showCartHandler} />
            <Feedback />
            <Footer />
          </div>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
