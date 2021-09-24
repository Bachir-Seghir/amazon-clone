import React from "react";
import "../styles/ProductActions.css";
import DeliveryLocation from "./DeliveryLocation";
import QuantitySelector from "./QuantitySelector";

function ProductActions({ product }) {
  const { pricing, stock } = product;

  if (stock > 0)
    return (
      <div className="productActions">
        <div className="productActions__price">
          <h2>
            <span>EUR</span>
            {pricing.discount > 0
              ? pricing.price - (pricing.price * pricing.discount) / 100
              : pricing.price}
          </h2>
        </div>
        <div className="productActions__shipping">
          <p>
            <span>EUR 40</span> Shipping & Import Fees Deposit to Algeria
          </p>
        </div>
        <DeliveryLocation large={true} />
        <QuantitySelector stock={stock} />
      </div>
    );
}

export default ProductActions;
