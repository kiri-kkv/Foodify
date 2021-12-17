import classes from "./gallery.module.css";

import rest_1 from "../../assets/rest-1.jpg";
import rest_2 from "../../assets/rest-2.jpg";
import rest_3 from "../../assets/rest-3.jpg";
import rest_4 from "../../assets/rest-4.jpg";
import rest_5 from "../../assets/rest-5.jpg";
import rest_6 from "../../assets/rest-6.jpg";
import rest_7 from "../../assets/rest-7.jpg";
import rest_8 from "../../assets/rest-8.jpg";
import rest_9 from "../../assets/rest-9.jpg";
import rest_10 from "../../assets/rest-10.jpg";
import rest_11 from "../../assets/rest-11.jpg";
import rest_12 from "../../assets/rest-12.jpg";

const Gallery = (props) => {
  return (
    <section className={classes.gallery}>
      <figure className={classes["gallery__item-1"]}>
        <img src={rest_1} alt="1" className={classes.gallery__img} />
      </figure>
      <figure className={classes["gallery__item-2"]}>
        <img src={rest_2} alt="2" className={classes.gallery__img} />
      </figure>
      <figure className={classes["gallery__item-3"]}>
        <img src={rest_3} alt="3" className={classes.gallery__img} />
      </figure>
      <figure className={classes["gallery__item-4"]}>
        <img src={rest_4} alt="4" className={classes.gallery__img} />
      </figure>
      <figure className={classes["gallery__item-5"]}>
        <img src={rest_5} alt="5" className={classes.gallery__img} />
      </figure>
      <figure className={classes["gallery__item-6"]}>
        <img src={rest_6} alt="6" className={classes.gallery__img} />
      </figure>
      <figure className={classes["gallery__item-7"]}>
        <img src={rest_7} alt="7" className={classes.gallery__img} />
      </figure>
      <figure className={classes["gallery__item-8"]}>
        <img src={rest_8} alt="8" className={classes.gallery__img} />
      </figure>
      <figure className={classes["gallery__item-9"]}>
        <img src={rest_9} alt="9" className={classes.gallery__img} />
      </figure>
      <figure className={classes["gallery__item-10"]}>
        <img src={rest_10} alt="10" className={classes.gallery__img} />
      </figure>
      <figure className={classes["gallery__item-11"]}>
        <img src={rest_11} alt="11" className={classes.gallery__img} />
      </figure>
      <figure className={classes["gallery__item-12"]}>
        <img src={rest_12} alt="12" className={classes.gallery__img} />
      </figure>
    </section>
  );
};

export default Gallery;
