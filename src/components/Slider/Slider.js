import classes from "./Slider.module.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import { useEffect } from "react";

const Dummy_img = [img1, img2, img3];

const Slider = () => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     for (const key of Dummy_img) {
  //       const image = Dummy_img[key];
  //     }
  //   }, 3000);
  // }, [key]);

  return (
    <section className={classes.slider}>
      {/* {Dummy_img.map((image) => ( */}
        <div className={classes["slider-container"]}>
          <img src={img1} />
        </div>
      {/* ))} */}
    </section>
  );
};

export default Slider;
