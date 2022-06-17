import classes from "./AccountCard.module.css";


const AccountCard = (props) => {
  return (
    <ul className={classes.card}>
      <li>
        <div>{props.children}</div>
        <div>{props.title}</div>
      </li>
    </ul>
  );
};

export default AccountCard;
