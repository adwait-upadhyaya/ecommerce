import { IPickCard } from "../interfaces/IPickCard";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import Link from "../atoms/Link";
const PicksCard = (props: IPickCard) => {
  const { title, imageSrc, text } = props;
  return (
    <>
      <div className="picks__card">
        <div className="picks__card__title">
          <Text type="h4">{title}</Text>
        </div>
        <div className="picks__card__image">
          <Image src={imageSrc} width="505px" height="626px" />
        </div>
        <div className="picks__card__text">
          <Text type="h6">{text}</Text>

          <Link url="#">
            <Text type="h6">Read More</Text>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PicksCard;
