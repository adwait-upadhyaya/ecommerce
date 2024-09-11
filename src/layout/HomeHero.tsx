import Button from "../atoms/Button";
import Text from "../atoms/Text";

const HomeHero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__details">
          <div className="hero__details__title">
            <Text type="h1" color="white">
              Your Cozy Era
            </Text>
            <div>
              <Text type="h4" color="white">
                Get peak comfy-chic
              </Text>
              <Text type="h4" color="white">
                with new winter essentials.
              </Text>
            </div>
          </div>

          <div className="hero__details__button">
            <Button type="primary" paddingX="80px" paddingY="12px">
              <Text type="h6">Shop Now</Text>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
