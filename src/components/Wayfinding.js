import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import "../styles/Wayfinding.css";

function Wayfinding() {
  function handleClick(e) {
    console.info(e.target);
  }
  const breadcrumbs = [
    <a href="" onClick={handleClick}>
      Home
    </a>,
    <a href="" onClick={handleClick}>
      Computers & Tablets
    </a>,
    <a href="" onClick={handleClick}>
      Tablets
    </a>,
  ];

  return (
    <div className="wayfinding">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </div>
  );
}

export default Wayfinding;
