import Image from "../atoms/Image";
import Text from "../atoms/Text";
interface IFeatureCard {
  title: string;
  text: string;
  iconSrc: string;
}

const FeatureCard = (props: IFeatureCard) => {
  const { title, text, iconSrc } = props;
  return (
    <div className="features__card">
      <div className="features__card__image">
        <Image src={iconSrc} />
      </div>
      <div className="features__card__content">
        <div className="bold">
          <Text type="h6">{title}</Text>
        </div>

        <Text type="h6">{text}</Text>
      </div>
    </div>
  );
};

export default FeatureCard;
