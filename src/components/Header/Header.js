import classes from "./Header.module.css";
import { VscSearch } from "react-icons/vsc";
import { GoLocation } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { ReactComponent as Logo } from "../../assets/headerLogo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes["header-container"]}>
      <div className={classes["top-header"]}>
        <header className={classes.header}>
          <nav>
            <ul>
              <li>
                <NavLink to="/aboutus">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/comunity">Community</NavLink>
              </li>
              <li>
                <NavLink to="/costumerservices">Costumer Service</NavLink>
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>
                <VscSearch style={{ color: "blue" }} />
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <GoLocation style={{ color: "blue" }} />
                <NavLink to="/stores">Stores</NavLink>
              </li>
              <li>
                <FaRegUser style={{ color: "blue" }} />
                <NavLink to="/myaccount">My Account</NavLink>
              </li>
              <li>
                <MdOutlineShoppingBag style={{ color: "blue" }} />
                <NavLink to="/shopping">Shopping Bag</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className={classes["middle-content"]}>
        <div className={classes.tittle}>
          <NavLink to="/home">
            <Logo />
          </NavLink>
        </div>
        <div className={classes.category}>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Womens</NavLink>
              </li>
              <li>
                <NavLink to="/">Mens</NavLink>
              </li>
              <li>
                <NavLink to="/">kids</NavLink>
              </li>
              <li>
                <NavLink to="/">fitness</NavLink>
              </li>
              <li>
                <NavLink to="/">sports</NavLink>
              </li>
              <li>
                <NavLink to="/">fangear</NavLink>
              </li>
              <li>
                <NavLink to="/">brands</NavLink>
              </li>
              <li>
                <NavLink to="/">sale</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={classes.offers}>
        <nav>
          <ul>
            <li>
              <NavLink to="/">FREE SHIPPING OVER $150*</NavLink>
            </li>
            <li>
              <NavLink to="/">FREE CLICK & COLLECT</NavLink>
            </li>
            <li>
              <NavLink to="/">AFTERPAY & ZIPPAY AVAILABLE*</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
