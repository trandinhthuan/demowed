import React, { useState } from "react";
import "./SlideBanner.css";

const SlideBanner = () => {
  const [index, setIndex] = useState(0);
  const images = [
    {
      src: "http://surl.li/etgzz",
    },
    {
      src: "http://surl.li/etgzv",
    },
  ];

  const handlePrevClick = () => {
    setIndex((index + images.length - 1) % images.length);
  };

  const handleNextClick = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div>
      <div className="slideshow">
        <button className="slideshow__arrow" onClick={handlePrevClick}>
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <img src={images[index].src} alt="slide" className="active" />
        <button className="slideshow__arrow arrow_right" onClick={handleNextClick}>
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default SlideBanner;
