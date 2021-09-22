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

const images = [
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
];

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
        <GaleryMagnifier images={images} />

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
          <Divider light={true} />
          <div className="product__details__specs">
            <ProductOptions />
          </div>
        </div>
        <div className="product__action"></div>
      </div>
    </div>
  );
}

export default Product;
