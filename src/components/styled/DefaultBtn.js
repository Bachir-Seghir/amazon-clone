import React from "react";
import "../../styles/DefaultBtn.css";

function DefaultBtn({ children }) {
  return <button className="defaultBtn">{children}</button>;
}

export default DefaultBtn;
