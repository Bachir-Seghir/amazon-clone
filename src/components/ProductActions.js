import React from "react";
import "../styles/ProductActions.css";
import AddToCartBtn from "./AddToCartBtn";
import DeliveryLocation from "./DeliveryLocation";
import QuantitySelector from "./QuantitySelector";
import DefaultBtn from "./styled/DefaultBtn";

function ProductActions({ product }) {
  const { pricing, stock } = product;

  return (
    <div className="productActions">
      <div className="productActions__price">
        {stock === 0 ? (
          <b>Currently unavailable.</b>
        ) : (
          <h2>
            <span>EUR</span>
            {pricing.discount > 0
              ? pricing.price - (pricing.price * pricing.discount) / 100
              : pricing.price}
          </h2>
        )}
      </div>
      {stock > 0 ? (
        <>
          <div className="productActions__shipping">
            <p>
              <span>EUR {pricing.shipping}</span> Shipping & Import Fees Deposit
              to Algeria
            </p>
          </div>
          <DeliveryLocation large={true} />
          <QuantitySelector stock={stock} />
          <AddToCartBtn />
          <div className="productActions__sellerInfo">
            <table>
              <tbody>
                <tr>
                  <td>ships from</td>
                  <td>
                    <a href="/">Amazon.com</a>
                  </td>
                </tr>
                <tr>
                  <td>sold By</td>
                  <td>
                    <a href="/">Amazon.com</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="productActions__unavailable">
          <p>We don't know when or if this item will be back in stock.</p>
          <DefaultBtn>see similar items</DefaultBtn>
          <DeliveryLocation large={true} />
        </div>
      )}
    </div>
  );
}

export default ProductActions;
