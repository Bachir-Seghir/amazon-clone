import React from "react";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import "../styles/Accountbadge.css";

function Accountbadge() {
  return (
    <div className="account__badge">
      <AccountCircleRoundedIcon className="account__badge-icon" />
      <span className="account__badge-name">
        <b>Hello, Bachir</b>
      </span>
    </div>
  );
}

export default Accountbadge;
