import classes from "./DetailsCard.module.css";
import { Link } from "react-router-dom";

const DetailsCard = (props) => {
  return (
    <div className={classes.list}>
      <h3>My Account</h3>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/">Personal Details</Link>
        </li>
        <li>
          <Link to="/">Address</Link>
        </li>
        <li>
          <Link to="/">Orders</Link>
        </li>
        <li>
          <Link to="/">Wishlist</Link>
        </li>
        <li>
          <Link to="/">Payment Mehods</Link>
        </li>
        <li>
          <button className={classes.btn} onClick={props.handleOnLogout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DetailsCard;
