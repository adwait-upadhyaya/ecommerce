import Image from "../atoms/Image";
import Text from "../atoms/Text";

const Reviews = () => {
  return (
    <>
      <div className="reviews">
        <div className="reviews__text">
          <Text type="h5">People are talking</Text>

          <div className="reviews__text__details">
            <Image src="/images/stars.png" />
            <Text type="h4">
              “Love this shirt! Fits perfectly and the fabric is thick without
              being stiff.”
            </Text>
          </div>

          <Text type="h6"> -- JonSnSf, The Heavyweight Overshirt</Text>
        </div>
        <div className="reviews__image">
          <Image src="/images/reviews.png" />
        </div>
      </div>
    </>
  );
};

export default Reviews;
