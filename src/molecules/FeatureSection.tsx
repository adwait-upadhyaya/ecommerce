import React from "react";
import Image from "../atoms/Image";
import Text from "../atoms/Text";

const features = [
  {
    icon: "/images/location.png",
    title: "Complimentary Shipping",
    description: "Enjoy free shipping on U.S. orders over $100.",
  },
  {
    icon: "/images/cube.png",
    title: "Consciously Crafted",
    description: "Designed with you and the planet in mind.",
  },
  {
    icon: "/images/craft.png",
    title: "Come Say Hi",
    description: "We have 11 stores across the U.S.",
  },
];

const FeatureSection: React.FC = () => {
  return (
    <div className="feature-section">
      {features.map((feature, index) => (
        <div key={index} className="feature-section__item">
          <Image
            src={feature.icon}
            alt={feature.title}
            width="78px"
            height="78px"
          />
          <Text type="h6">{feature.title}</Text>
          <Text type="h6">{feature.description}</Text>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
