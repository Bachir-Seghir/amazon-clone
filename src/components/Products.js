import React from "react";
import Productcard from "./Productcard";
import "../styles/Products.css";
import PaginationComp from "./PaginationComp";
import Filters from "./Filters";
import { product } from "./Product";

function Products() {
  return (
    <div className="products">
      <Filters />
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
            1 - 8 of over 300 results for <strong>Computers</strong>
          </p>
        </div>
        <PaginationComp currentPage={7} />
        <div className="products__layout">
          <Productcard product={product} />
          <Productcard product={product} />
          <Productcard product={product} />
          <Productcard product={product} />
          <Productcard product={product} />
        </div>
        <PaginationComp currentPage={1} />
      </div>
    </div>
  );
}

export default Products;
