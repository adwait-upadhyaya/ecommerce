import { ICategoryCard } from "../interfaces/ICategoryCard";
import Image from "../atoms/Image";
import Link from "../atoms/Link";
import Text from "../atoms/Text";

const CategoryCard = (props: ICategoryCard) => {
  const { id, name, image, linkTo } = props;
  return (
    <Link url={`/${linkTo}`}>
      <div className="category__items__card" id={`category-${id}`}>
        <Image src={image} width="300" height="400" />

        <Text type="h6">{name}</Text>
      </div>
    </Link>
  );
};

export default CategoryCard;
