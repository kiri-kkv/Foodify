import classes from "./FoodItems.module.css";
import alooTikki from "../../assets/Aloo-tikki.png";
import curryPan from "../../assets/curry-pan.png";
import paneerVeg from "../../assets/paneervegpizza.png";
import veggiSupreme from "../../assets/veggiSupreme.png";
import veggiCheese from "../../assets/veggi-cheese-king.png";
import combo from "../../assets/patty-combo.png";
import FoodItemList from "./FoodItemList";
import Heading2 from "../UI/Headings/Heading-2";

const foodItems = [
  {
    id: "f1",
    img: alooTikki,
    name: "Aloo Tikki",
    ordered: "3",
    price: "50",
    time: "30 Min",
    type: "Veg",
  },
  {
    id: "f2",
    img: curryPan,
    name: "Curry Pan",
    ordered: "5",
    price: "160",
    time: "45 Min",
    type: "Non Veg",
  },
  {
    id: "f3",
    img: paneerVeg,
    name: "Cheese Paneer",
    ordered: "4",
    price: "120",
    time: "30 Min",
    type: "Veg",
  },
  {
    id: "f4",
    img: veggiCheese,
    name: "Cheese King",
    ordered: "7",
    price: "40",
    time: "20 Min",
    type: "Veg",
  },
  {
    id: "f5",
    img: veggiSupreme,
    name: "Supreme Corn",
    ordered: "6",
    price: "200",
    time: "45 Min",
    type: "Non Veg",
  },
  {
    id: "f6",
    img: combo,
    name: "Salsa Combo",
    ordered: "5",
    price: "250",
    time: "35 Min",
    type: "Veg",
  },
];
const FoodItems = (props) => {
  return (
    <section>
      <Heading2 text="Our Menu"></Heading2>
      <div className={classes.food}>
        {foodItems.map((item) => (
          <FoodItemList
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            ordered={item.ordered}
            price={item.price}
            time={item.time}
            type={item.type}
          ></FoodItemList>
        ))}
      </div>
    </section>
  );
};

export default FoodItems;
