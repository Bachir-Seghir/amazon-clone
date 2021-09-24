import React from "react";
import classNames from "classnames";

import "../styles/Pricing.css";

function Pricing({ fullMode, pricing }) {
  return (
    <div
      className={classNames("pricing", {
        full: fullMode,
      })}>
      {pricing.discount > 0 && (
        <h4 className="pricing__oldPrice">
          {fullMode && <h4>Original Price:</h4>}
          <span>EUR{pricing.price}</span>
        </h4>
      )}
      <div className="pricing__price">
        {fullMode && <h4>Price :</h4>}
        {!fullMode && <span>EUR</span>}
        <h2>
          {fullMode && "EUR "}
          {pricing.discount > 0
            ? pricing.price - (pricing.price * pricing.discount) / 100
            : pricing.price}
        </h2>
        <div id="shipping" className="pricing__shipping">
          {fullMode && <span>+</span>}
          <span>EUR</span>
          <h2>40</h2>
          <p>Shipping to Algeria </p>
        </div>
      </div>

      {fullMode && pricing.discount > 0 && (
        <div className="pricing__saves">
          <h4>You Save : </h4>
          <span>
            EUR {(pricing.price * pricing.discount) / 100} ({pricing.discount}%)
          </span>
        </div>
      )}
    </div>
  );
}

export default Pricing;
