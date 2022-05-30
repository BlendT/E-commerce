import classes from "./Slider.module.css";
import img1 from "../../assets/img1.jpg";

const Slider = () => {
  return (
    <section className={classes.slider}>
      <div className={classes["slider-container"]}>
        <img src={img1} alt="slider" />
      </div>
    </section>
  );
};

export default Slider;
