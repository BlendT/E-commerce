import classes from "./UserAccount.module.css";
import { Link } from "react-router-dom";
import AccountCard from "../../UI/AccountCard";
import { BsPerson, BsSuitHeart } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { useContext, useState } from "react";
import { MdOutlinePayment } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import AuthContext from "../../store/auth-context";

const UserAccount = () => {
  const authCtx = useContext(AuthContext);

  const handleOnLogout = () => {
    authCtx.logout();
  };

  return (
    <div className={classes.login}>
      {authCtx.isRegistered && alert("Account Successfully Created")}
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
            <button className={classes.btn} onClick={handleOnLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div className={classes["middle-container"]}>
        <div className={classes.header}>
          <h3>Welcome</h3>
          <p>
            It's great to see you!
            <button
              className={classes.btn}
              style={{ textDecoration: "underline" }}
              onClick={handleOnLogout}
            >
              Logout
            </button>
          </p>
        </div>
        <div className={classes.card}>
          <div>
            <AccountCard>
              <BsPerson size={30}></BsPerson>
            </AccountCard>
          </div>
          <div>
            <AccountCard>
              <BiShoppingBag size={30} />
            </AccountCard>
          </div>
          <div>
            <AccountCard>
              <BsSuitHeart size={30} />
            </AccountCard>
          </div>
          <div>
            <AccountCard>
              <FaBuilding size={30} />
            </AccountCard>
          </div>
          <div>
            <AccountCard>
              <MdOutlinePayment size={30} />
            </AccountCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
