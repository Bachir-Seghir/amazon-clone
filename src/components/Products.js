import React from "react";
import Productcard from "./Productcard";
import "../styles/Products.css";
import PaginationComp from "./PaginationComp";

function Products() {
  return (
    <div className="products">
      <div className="products__filters">
        <h3>Filters</h3>
      </div>
      <div className="products__container">
        <div className="products__container__header">
          <h2>Computer, Tablets & ITAccessories </h2>{" "}
          {/* title of the this list of products */}
          <p>
            Shop laptops, desktops, monitors, tablets, PC gaming, hard drives
            and more
          </p>
        </div>
        <div className="products__search-result">
          <p>
            12 of over 3000 results for <strong>Computers</strong>
          </p>
        </div>
        <PaginationComp currentPage={7} />
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
        <PaginationComp currentPage={1} />
      </div>
    </div>
  );
}

export default Products;
