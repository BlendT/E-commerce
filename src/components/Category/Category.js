import classes from "./Category.module.css";
import img from "../../assets/img1.jpg";

const Dummy_categorys = [
  {
    id: "ctg1",
    url: img,
    category: "Womens",
  },
  {
    id: "ctg2",
    url: "..../",
    category: "Mens",
  },
  {
    id: "ctg3",
    url: "..../",
    category: "Kids",
  },
  {
    id: "ctg4",
    url: "..../",
    category: "Running",
  },
  {
    id: "ctg5",
    url: "..../",
    category: "Training",
  },
  { id: "ctg6", url: "..../", category: "Fitness Equipment" },
  { id: "ctg7", url: "..../", category: "Football" },
  { id: "ctg8", url: "..../", category: "NetBall" },
  { id: "ctg9", url: "..../", category: "Spalding Systems" },
  { id: "ctg10", url: "..../", category: "Womens" },
  { id: "ctg11", url: "..../", category: "Womens" },
  { id: "ctg12", url: "..../", category: "Womens" },
];

const Category = () => {
  return (
    <section className={classes["category-container"]}>
      <h1>Category</h1>
      <div className={classes["list-container"]}>
        <ul>
          {Dummy_categorys.map((item) => (
            <li key={item.id}>
              <a href="/">
                <div className={classes.list}>
                  <div className={classes.listabc}>
                    <img src={item.url} alt={item.category}></img>
                  </div>
                  <h3>{item.category}</h3>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Category;
