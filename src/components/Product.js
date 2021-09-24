import React, { useState, useEffect } from "react";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "../styles/Product.css";

import src40 from "../styles/images/AC_US40_.jpg";
import src400 from "../styles/images/AC_SX466_.jpg";
import src1500 from "../styles/images/AC_SL1500_.jpg";
import GaleryMagnifier from "./GaleryMagnifier";
import RatingFback from "./RatingFback";
import { Divider } from "@mui/material";
import ProductOptions from "./ProductOptions";
import ProductOverview from "./ProductOverview";
import ProductActions from "./ProductActions";
import Pricing from "./Pricing";

export const product = {
  id: "prod1",
  name: "Samsung Tablet",
  pricing: {
    price: 199,
    discount: 20,
  },
  cardImgSrc: src400,
  images: [
    {
      id: "img1",
      smallSrc: src400,
      largeSrc: src1500,
      thumbSrc: src40,
    },
    {
      id: "img2",
      smallSrc: src400,
      largeSrc: src1500,
      thumbSrc: src40,
    },
    {
      id: "img3",
      smallSrc: src400,
      largeSrc: src1500,
      thumbSrc: src40,
    },
  ],
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
  overview: {
    "Brand": "Jabra",
    "Model Name": "Evolve 40 Mono",
    "Connectivity & Technology": "Wired",
    "Form Factor": "On Ear",
  },
};

function Product() {
  return (
    <div className="product">
      <div className="product__path">
        <ul>
          <li>
            <a href="/">Computers</a>
            <KeyboardArrowRightIcon />
          </li>
          <li>
            <a href="/">Computers & Tablets</a>
            <KeyboardArrowRightIcon />
          </li>
          <li>
            <a href="/">Tablets</a>
          </li>
        </ul>
      </div>
      <div className="product__wrap">
        <div className="product__galery">
          <GaleryMagnifier images={product.images} />
        </div>

        <div className="product__details">
          <div className="product__details__head">
            <p className="product__details__title">
              Logitech H390 Wired Headset, Stereo Headphones with
              Noise-Cancelling Microphone, USB, In-Line Controls, PC/Mac/Laptop
              - Black
            </p>
            <a href="/" className="product__details__seller">
              By Bachir
            </a>
            <RatingFback rates={4.3} status={"readOnly"} />
          </div>
          <Pricing fullMode={true} pricing={product.pricing} />
          <Divider light={true} />
          <div className="product__details__specs">
            <ProductOptions options={product.options} />
            <ProductOverview overview={product.overview} />
            <Divider light={true} />
          </div>
          <div className="product__details__about">
            <h3>About This item</h3>
            <ul>
              <li>
                <p>
                  PROFESSIONAL HEADSET – The Jabra Evolve 40 pro headset is
                  built for greater productivity and amazing sound quality for
                  calls and music
                </p>
              </li>
              <li>
                <p>
                  BE MORE PRODUCTIVE – Stay in the zone and avoid interruptions
                  thanks to the busylight that automatically turns on during a
                  call to let others know to not disturb you. It can also be
                  manually activated so you can stay focused when needed
                </p>
              </li>
              <li>
                <p>
                  FLEXIBLE CONNECTIVITY – The 3.5mm jack lets you connect this
                  Jabra headset to your personal device, such as a smartphone or
                  table, so you can work or listen to music wherever you are. It
                  also has a USB connector for even more flexibility
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="product__actions">
          <ProductActions />
        </div>
      </div>
    </div>
  );
}

export default Product;
