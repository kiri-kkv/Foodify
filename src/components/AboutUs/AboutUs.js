import classes from "./AboutUs.module.css";
import Heading1 from "../UI/Headings/Heading-1";
import Heading2 from "../UI/Headings/Heading-2";
import svg from "../../assets/sprite.svg";
import { Fragment } from "react";

const AboutUs = (props) => {
  return (
    <Fragment>
      <div className={classes.heading}>
        <Heading1 text="Foodify" />
        <Heading2 text="Where great food comes first" />
      </div>
      <div className={classes.aboutus}>
        <div className={classes.aboutus__card}>
          <svg className={classes.aboutus__icon}>
            <use xlinkHref={`${svg}#icon-emoji-happy`}></use>
          </svg>
          <h3>Provide best customer service</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            totam autem at nesciunt fugit in!
          </p>
        </div>

        <div className={classes.aboutus__card}>
          <svg className={classes.aboutus__icon}>
            <use xlinkHref={`${svg}#icon-tree`}></use>
          </svg>
          <h3>Eco-friendly food packages</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            totam autem at nesciunt fugit in!
          </p>
        </div>

        <div className={classes.aboutus__card}>
          <svg className={classes.aboutus__icon}>
            <use xlinkHref={`${svg}#icon-thermometer`}></use>
          </svg>
          <h3>Follow all covid guidlines</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            totam autem at nesciunt fugit in!
          </p>
        </div>

        <div className={classes.aboutus__card}>
          <svg className={classes.aboutus__icon}>
            <use xlinkHref={`${svg}#icon-key`}></use>
          </svg>
          <h3>Secure payments</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            totam autem at nesciunt fugit in!
          </p>
        </div>

        <div className={classes.aboutus__card}>
          <svg className={classes.aboutus__icon}>
            <use xlinkHref={`${svg}#icon-hour-glass`}></use>
          </svg>
          <h3>Always on time</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            totam autem at nesciunt fugit in!
          </p>
        </div>

        <div className={classes.aboutus__card}>
          <svg className={classes.aboutus__icon}>
            <use xlinkHref={`${svg}#icon-shop`}></use>
          </svg>
          <h3>Avaliable 24x7</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            totam autem at nesciunt fugit in!
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUs;
