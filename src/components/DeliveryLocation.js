import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../styles/DeliveryLocation.css";
import classNames from "classnames";

function DeliveryLocation({ large }) {
  return (
    <div className={classNames("deliveryLocation", { large: large })}>
      <LocationOnIcon fontSize="small" />
      <a href="/">
        <p>Deliver to</p>
        <h4>Algeria</h4>
      </a>
    </div>
  );
}

export default DeliveryLocation;
