import FeatureCard from "../molecules/FeatureCard";

const Features = () => {
  return (
    <>
      <div className="features">
        <FeatureCard
          title="Complimentary Shopping"
          text="Enjoy free shipping on U.S. orders over $100."
          iconSrc="/images/cube.png"
        />
        <FeatureCard
          title="Consciously Crafted"
          text="Designed with you and the planet in mind."
          iconSrc="/images/craft.png"
        />
        <FeatureCard
          title="Come Say Hi"
          text="We Have 11 stores across the U.S."
          iconSrc="/images/location.png"
        />
      </div>
    </>
  );
};

export default Features;
