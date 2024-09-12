import React from "react";
import Image from "../atoms/Image";

const images = [
  "/images/onYou1.png",
  "/images/onYou2.png",
  "/images/onYou3.png",
  "/images/onYou4.png",
  "/images/onYou5.png",
];

const StaticImageSection: React.FC = () => {
  return (
    <div className="static-images">
      {images.map((image, index) => (
        <div key={index} className="static-images__item">
          <Image
            src={image}
            alt={`Static Image ${index + 1}`}
            width="225px"
            height="225px"
          />
          <div className="static-images__icon"></div>
        </div>
      ))}
    </div>
  );
};

export default StaticImageSection;
