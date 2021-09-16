import React from "react";
import "../styles/Products.css";
import Productcard from "./Productcard";

function Products() {
  return (
    <div className="products">
      <div className="products__filters"></div>
      <div className="products__container">
        <div className="products__container__header">
          <h2>Computer, Tablets & ITAccessories </h2>{" "}
          {/* title of the this list of products */}
          <p>
            Shop laptops, desktops, monitors, tablets, PC gaming, hard drives
            and more
          </p>
        </div>
        <div className="products__layout">
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
          <Productcard />
        </div>
      </div>
    </div>
  );
}

export default Products;
