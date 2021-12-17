import Heading1 from "../UI/Headings/Heading-1";
import Heading2 from "../UI/Headings/Heading-2";
import classes from "./HeaderPicture.module.css";

const HeaderPicture = (props) => {
  return (
    <div className={classes.picture}>
      <div className={classes.heading}>
        <div className={classes.mainHeading}>
          <Heading1 text="Foodify" />
        </div>
        <div className={classes.secondaryHeading}>
          <Heading2
            style={classes.heading__secondary}
            text="Satisfy your food attack"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderPicture;
