import DetailsCard from "../../UI/DetailsCard";
import classes from "./PersonalDetails.module.css";

const PersonalDetails = () => {
  return (
    <div className={classes["personal-details-container"]}>
      <DetailsCard />
      <div className={classes.header}>
        <h3>ACCOUNT DETAILS</h3>
      </div>
    </div>
  );
};

export default PersonalDetails;
