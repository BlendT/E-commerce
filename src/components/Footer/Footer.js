import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.footer}>
        <div className={classes["footer-links"]}>Facebook</div>
        <div className={classes["footer-services"]}>Costumer Services</div>
        <div className={classes["footer- polices"]}>Our Polices</div>
        <div className={classes["footer-about"]}> About Intersport</div>
      </div>
    </footer>
  );
};

export default Footer;
