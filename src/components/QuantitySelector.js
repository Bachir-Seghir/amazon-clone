import React, { useState, useEffect } from "react";
import "../styles/QuantitySelector.css";

function QuantitySelector({ stock }) {
  const [quantity, setQuantity] = useState(1);
  const [selectLot, setSelectLot] = useState(false);
  const handleSelect = (e) => {
    if (e.target.value === "10") {
      setSelectLot(true);
      setQuantity(parseInt(e.target.value));
    }
    setQuantity(parseInt(e.target.value));
  };

  useEffect(() => {
    setQuantity(quantity);
    quantity < 10 && setSelectLot(false);
  }, [quantity]);
  return (
    <div className="quantitySelector">
      <select
        disabled={selectLot}
        name="quantity"
        id="quantity"
        value={quantity}
        onChange={handleSelect}>
        {Array.from({ length: stock > 10 ? 9 : stock }, (_, i) => i + 1).map(
          (i) => (
            <option key={i}>{i}</option>
          )
        )}
        {stock > 10 && <option value={10}>+10</option>}
      </select>
      {selectLot && quantity >= 10 && (
        <input
          type="number"
          id="largeQuantity"
          defaultValue="10"
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          onClick={handleSelect}
          max={stock}
        />
      )}
      <div className="quantitySelector__quantity">
        <p>Qt : {quantity}</p>
        <span>
          {quantity < stock ? (
            "In Stock"
          ) : (
            <b>
              Only {stock} left in Stock ! <br />
              (more on the way)
            </b>
          )}
        </span>
      </div>
    </div>
  );
}

export default QuantitySelector;
