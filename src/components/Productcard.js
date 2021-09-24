import React from "react";
import "../styles/ProductCard.css";
import Pricing from "./Pricing";
import RatingFback from "./RatingFback";

function Productcard({ product }) {
  return (
    <div className="productCard">
      <div className="productCard__wrap">
        <a href="/product" className="productCard__image">
          <img src={product.cardImgSrc} alt="" />
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

          <Pricing fullMode={false} pricing={product.pricing} />
        </div>
      </div>
    </div>
  );
}

export default Productcard;
