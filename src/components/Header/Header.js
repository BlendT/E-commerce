import classes from "./Header.module.css";
import { VscSearch, VscLocation } from "react-icons/vsc";
import { GoLocation } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";

const Header = () => {
  return (
    <div className={classes["header-container"]}>
      <div className={classes["top-header"]}>
        <header className={classes.header}>
          <nav>
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Community</a>
              </li>
              <li>
                <a href="/">Costumer Service</a>
              </li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>
                <VscSearch style={{ color: "blue" }} />
                <a href="/">Home</a>
              </li>
              <li>
                <GoLocation style={{ color: "blue" }} />
                <a href="/">Stores</a>
              </li>
              <li>
                <FaRegUser style={{ color: "blue" }} />
                <a href="/">My Account</a>
              </li>
              <li>
                <MdOutlineShoppingBag style={{ color: "blue" }} />
                <a href="/">Shopping Bag</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className={classes["middle-content"]}>
        <div className={classes.title}>
          <h1>Tittle</h1>
        </div>
        <div className={classes.category}>
          <nav>
            <ul>
              <li>
                <a href="/">Womens</a>
              </li>
              <li>
                <a href="/">Mens</a>
              </li>
              <li>
                <a href="/">kids</a>
              </li>
              <li>
                <a href="/">fitness</a>
              </li>
              <li>
                <a href="/">sports</a>
              </li>
              <li>
                <a href="/">fangear</a>
              </li>
              <li>
                <a href="/">brands</a>
              </li>
              <li>
                <a href="/">sale</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={classes.offers}>
        <nav>
          <ul>
            <li>
              <a href="/">aaaaa</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
