import React, { useState } from "react";
import classNames from "classnames";

import "../styles/ProductOptions.css";

const product = {
  id: "prod1",
  name: "Samsung Tablet",
  price: 200,
  options: [
    {
      id: "o1",
      type: "text",
      title: "color",
      values: [
        { name: "white", value: "#fff" },
        { name: "blue", value: "#12aa" },
        { name: "gray", value: "#555" },
      ],
    },
    {
      id: "o3",
      title: "type",
      type: "image",
      values: [
        {
          name: "stereo",
          value: "https://m.media-amazon.com/images/I/31Z0ags7MWL._SS36_.jpg",
        },
        {
          name: "mono",
          value: "https://m.media-amazon.com/images/I/41NmGdDm8GL._SS36_.jpg",
        },
      ],
    },
    {
      id: "o2",
      type: "text",
      title: "size",
      values: [
        { name: "16GB", value: 16 },
        { name: "32GB", value: 32 },
        { name: "64GB", value: 64 },
        { name: "128GB", value: 128 },
      ],
    },
  ],
};

function ProductOptions() {
  return (
    <div className="options">
      {product.options.map((option) => (
        <OptionSelector key={option.id} option={option} />
      ))}
    </div>
  );
}

export const OptionSelector = ({ option }) => {
  const { title, values, type } = option;
  const [selectedItem, setSelectedItem] = useState(option.values[0].name);

  const [hoveredItem, setHoveredItem] = useState("");
  const [hovering, setHovering] = useState(false);

  const handleHoverIn = (item) => {
    setHoveredItem(item);
    setHovering(true);
  };
  const handleHoverOut = () => {
    setHovering(false);
    setHoveredItem("");
  };
  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="option">
      <p className="option__title">
        {title}:<strong>{hovering ? hoveredItem : selectedItem}</strong>
      </p>
      <ul className="option__items">
        {values.map((item) => {
          if (type === "text") {
            return (
              <li
                className={classNames("option__item", {
                  "is-active": selectedItem === item.name,
                })}
                onMouseEnter={() => handleHoverIn(item.name)}
                onMouseLeave={handleHoverOut}
                onClick={() => handleSelect(item.name)}>
                <button>{item.name}</button>
              </li>
            );
          } else if (type === "image") {
            return (
              <li
                className={classNames("option__item", {
                  "is-active": selectedItem === item.name,
                })}
                onMouseEnter={() => handleHoverIn(item.name)}
                onMouseLeave={handleHoverOut}
                onClick={() => handleSelect(item.name)}>
                <img src={item.value} alt="" />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default ProductOptions;
