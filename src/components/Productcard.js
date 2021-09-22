import React from "react";
import "../styles/ProductCard.css";
import RatingFback from "./RatingFback";

function Productcard() {
  return (
    <div className="productCard">
      <div className="productCard__wrap">
        <a href="/" className="productCard__image">
          <img
            src="https://m.media-amazon.com/images/I/81AbJXWCxXL._AC_SX679_.jpg"
            alt=""
          />
        </a>
        <div className="productCard__details">
          <p className="productCard__desc">
            Acer Aspire 5 A515-46-R14K Slim Laptop | 15.6" Full HD IPS | AMD
            Ryzen 3 3350U Quad-Core Mobile Processor | 4GB DDR4 | 128GB NVMe SSD
            | WiFi 6 | Backlit KB | Amazon Alexa | Windows 10 Home (S mode) Acer
            Aspire 5 A515-46-R14K Slim Laptop | 15.6" Full HD IPS | AMD Ryzen 3
            3350U Quad-Core Mobile Processor | 4GB DDR4 | 128GB NVMe SSD | WiFi
            6 | Backlit KB | Amazon Alexa | Windows 10 Home (S mode)
          </p>
          <a href="/" className="productCard__owner">
            by bachir
          </a>

          <RatingFback rates={4.5} status={"readOnly"} />

          <div className="productCard__pricing">
            <div className="productCard__price">
              <span>EUR</span>
              <h2>85.30</h2>
            </div>
            <h4 className="productCard__oldPrice">EUR 112.58 </h4>
            <div className="productCard__price">
              <span>EUR</span>
              <h2>40</h2>
              <p>Shipping to Algeria </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productcard;
