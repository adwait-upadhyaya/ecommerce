import Image from "../atoms/Image";
import Text from "../atoms/Text";
interface IEverLaneFavoriteCard {
  src: string;
  title: string;
  price: number;
  subTitle: string;
}
export default function EverLaneFavoriteCard({
  title,
  src,
  price,
  subTitle,
}: IEverLaneFavoriteCard) {
  return (
    <div className="everlane-favorite-card">
      <Image src={src} width="282px" height="420px" alt="" />
      <div className="everlane-favorite-card__details">
        <div className="everlane-favorite-card__details__about">
          <Text type="p">{title}</Text>
          <Text type="p">{subTitle}</Text>
        </div>
        <Text type="p">${price}</Text>
      </div>
    </div>
  );
}
