import classes from "./Feedback.module.css";
import Heading2 from "../UI/Headings/Heading-2";
import person1 from "../../assets/user-4.jpg";
import person2 from "../../assets/user-6.jpg";
import video1 from "../../assets/video1.mp4";
import FeedbackList from "./FeedbackList";
import Video from "./video";

const story = [
  {
    id: "1",
    name: "Jack William",
    photo: person1,
    Heading: "Great taste with good quality food",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam porro praesentium expedita aspernatur voluptates earum quaerat ad magnam, at explicabo reiciendis modi itaque molestias quae rerum consequuntur veritatis corporis. Dolor!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae excepturi vel magni et totam architecto sint placeat amet alias quas.",
  },
  {
    id: "2",
    name: "Katy Perry",
    photo: person2,
    Heading: "Best place to have food",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam porro praesentium expedita aspernatur voluptates earum quaerat ad magnam, at explicabo reiciendis modi itaque molestias quae rerum consequuntur veritatis corporis. Dolor!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae excepturi vel magni et totam architecto sint placeat amet alias quas.",
  },
];

const Feedback = (props) => {
  return (
    <div className={classes.feedback}>
      <Heading2 text="We Make people genuinely happy" />
      <div className={classes.people__feedback}>
        {story.map((item) => (
          <FeedbackList
            key={item.id}
            name={item.name}
            photo={item.photo}
            heading={item.Heading}
            comment={item.comment}
          />
        ))}
      </div>
      <Video src={video1} />
    </div>
  );
};

export default Feedback;
