import Text from "../atoms/Text";
import Loading from "../components/Loader";
import { categoryImages } from "../constants/categoryImage";
import CategoryCard from "../molecules/CategoryCard";
import { useGetProductCategoriesQuery } from "../services/products";
interface ICategory {
  name: string;
  image: string;
  linkTo: string;
}

const Category = () => {
  const { data, error, isLoading } = useGetProductCategoriesQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error</div>;
  }

  let link: string;
  const categories: ICategory[] = [];
  data?.forEach((element: string) => {
    if (element in categoryImages) {
      switch (element) {
        case "mens's clothing":
          link = "men";
          break;

        case "womens's clothing":
          link = "women";
          break;

        case "jewelery":
          link = "jewelery";
          break;

        case "electronics":
          link = "electronics";
          break;

        default:
          break;
      }
    }
    const categoryObject = {
      name: element,
      image: categoryImages[element as keyof typeof categoryImages],
      linkTo: link,
    };
    categories.push(categoryObject);
  });

  return (
    <>
      <div className="category">
        <div className="category__text">
          <Text type="h4">Shop By Category</Text>
        </div>
        <div className="category__items">
          {categories.map((category, index) => (
            <CategoryCard
              linkTo={category.linkTo}
              id={index}
              key={index}
              name={category.name}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
