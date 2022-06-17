import classes from "./UserAccount.module.css";
import { Link } from "react-router-dom";
import AccountCard from "../../UI/AccountCard";
import { BsPerson, BsSuitHeart } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { useContext, useState } from "react";
import { MdOutlinePayment } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import AuthContext from "../../store/auth-context";
import DetailsCard from "../../UI/DetailsCard";

const UserAccount = () => {
  const authCtx = useContext(AuthContext);

  const handleOnLogout = () => {
    authCtx.logout();
    authCtx.registerHandler(false);
  };

  return (
    <div className={classes.login}>
      <DetailsCard handleOnLogout={handleOnLogout} />
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
          <Link to="/myaccount/edit-account">
            <AccountCard title="Personal Details">
              <BsPerson size={30}></BsPerson>
            </AccountCard>
          </Link>
          <Link to="/">
            <AccountCard title="My Orders">
              <BiShoppingBag size={30} />
            </AccountCard>
          </Link>
          <Link to="/">
            <AccountCard title="Wishlist">
              <BsSuitHeart size={30} />
            </AccountCard>
          </Link>
          <Link to="/">
            <AccountCard title="Addresses">
              <FaBuilding size={30} />
            </AccountCard>
          </Link>
          <Link to="/">
            <AccountCard title="Payment Methods">
              <MdOutlinePayment size={30} />
            </AccountCard>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
