import classes from "./Brands.module.css";
import { Link } from "react-router-dom";

const Dummy_Brands = [
  {
    id: "b1",
    url: "",
    name: "Adidas",
  },
  {
    id: "b2",
    url: "",
    name: "Adidas",
  },
  {
    id: "b3",
    url: "",
    name: "Adidas",
  },
  {
    id: "b4",
    url: "",
    name: "Adidas",
  },
  {
    id: "b5",
    url: "",
    name: "Adidas",
  },
  {
    id: "b6",
    url: "",
    name: "Adidas",
  },
  {
    id: "b7",
    url: "",
    name: "Adidas",
  },
  {
    id: "b8",
    url: "",
    name: "Adidas",
  },
];
const Brands = () => {
  return (
    <section className={classes["brand-container"]}>
      <h1>Popular Brands</h1>
      <div className={classes["list-container"]}>
        <ul>
          {Dummy_Brands.map((item) => (
            <li key={item.id}>
              <Link to="/">
                <div className={classes.brands}>
                  <img src={item.url} alt="brands" />
                  <span>{item.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Brands;
