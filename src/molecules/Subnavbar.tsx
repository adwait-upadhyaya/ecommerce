import Text from "../atoms/Text";
import "../styles/components/_subnavbar.scss";

const Subnavbar = () => {
  return (
    <>
      <div className="subnavbar">
        <div className="subnavbar__text">
          <Text type="p">Holiday Gifting</Text>
        </div>
        <div className="subnavbar__text">
          <Text type="p">New Arrivals</Text>
        </div>
        <div className="subnavbar__text">
          <Text type="p">Best-sellers</Text>
        </div>
        <div className="subnavbar__text">
          <Text type="p">Clothing</Text>
        </div>
        <div className="subnavbar__text">
          <Text type="p">Tops & sweaters</Text>
        </div>
        <div className="subnavbar__text">
          <Text type="p">Pants and Jeans</Text>
        </div>
        <div className="subnavbar__text">
          <Text type="p">Outerwear</Text>
        </div>
        <div className="subnavbar__text">
          <Text type="p">Shoes & Bags</Text>
        </div>
        <div className="subnavbar__text">
          <Text type="p" color="#D0021B">
            Sale
          </Text>
        </div>
      </div>
    </>
  );
};

export default Subnavbar;
