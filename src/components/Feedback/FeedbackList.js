import classes from "./FeedbackList.module.css";

const FeedbackList = (props) => {
  const { name, photo, heading, comment } = props;

  return (
    <div className={classes.people__story}>
      <figure className={classes.people__info}>
        <img src={photo} alt="Person 1" />
        <figcaption>{name}</figcaption>
      </figure>
      <div className={classes.people__comment}>
        <h3>{heading}</h3>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default FeedbackList;
