import classes from "./video.module.css";

const Video = (props) => {
  return (
    <div className={classes["bg-video"]}>
      <video className={classes["bg-video__content"]} autoPlay muted loop>
        <source src={props.src} type="video/mp4"></source>
        your browser is not supported
      </video>
    </div>
  );
};

export default Video;
