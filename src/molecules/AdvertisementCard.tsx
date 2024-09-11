import Button from "../atoms/Button";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import { IAdvertisement } from "../interfaces/IAdvertisement";

const AdvertisementCard = (props: IAdvertisement) => {
  const { id, image, text, buttonText } = props;
  return (
    <div className="advertisement__card" id={`advertisement-${id}`}>
      <Image src={image} />

      <Text type="h2" color="white">
        {text}
      </Text>

      <Button type="primary" paddingX="80px" paddingY="12px">
        <Text type="p">{buttonText}</Text>
      </Button>
    </div>
  );
};

export default AdvertisementCard;
