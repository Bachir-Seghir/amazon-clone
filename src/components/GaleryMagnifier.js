import React, { useState, useEffect } from "react";
import classNames from "classnames";
import ReactImageMagnify from "react-image-magnify";
import reactImageSize from "react-image-size";

import "../styles/GaleryMagnifier.css";

function GaleryMagnifier({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const [dimensions, setDimensions] = useState({});

  // get dimension of the selected image in galery
  async function getDimension(imgSrc) {
    const { width, height } = await reactImageSize(imgSrc);
    setDimensions({ width, height });
  }

  useEffect(() => {
    getDimension(selectedImage.largeSrc);
  }, [selectedImage]);
  return (
    <div className="galery">
      <div className="galery__magnify">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: selectedImage.smallSrc,
            },
            largeImage: {
              src: selectedImage.largeSrc,
              width: dimensions.width,
              height: dimensions.height,
            },
            enlargedImageContainerDimensions: {
              width: "150%",
              height: "200%",
            },
            shouldUsePositiveSpaceLens: true,
            lensStyle: {
              "background-size": "3px 3px",
              "background-image":
                "linear-gradient(to right, grey 1px, transparent 1px)linear-gradient(to bottom, grey 1px, transparent 1px",
            },
          }}
        />
      </div>
      <div className="galery__list">
        <ul>
          {images.map((item) => (
            <li
              onClick={() => setSelectedImage(item)}
              key={item.id}
              className={classNames("galery__list__item", {
                "is-active": selectedImage.id === item.id,
              })}>
              <img src={item.thumbSrc} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GaleryMagnifier;
