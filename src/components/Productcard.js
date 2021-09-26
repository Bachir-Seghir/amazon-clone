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
          <p className="productCard__title">{product.name}</p>
          <a href="/" className="productCard__owner">
            by {product.seller}
          </a>

          <RatingFback rates={4.5} status={"readOnly"} />

          <Pricing fullMode={false} pricing={product.pricing} />
        </div>
      </div>
    </div>
  );
}

export default Productcard;
