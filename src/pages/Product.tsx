import Text from "../atoms/Text";
import Loading from "../components/Loader";
import ProductListing from "../molecules/ProductListing";
import { useGetCategoryProductsQuery } from "../services/products";

const Product = (props: { category: string; title: string }) => {
  const { category, title } = props;
  const { data, error, isLoading } = useGetCategoryProductsQuery(category);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <>Oh no, there was an error</>;
  }

  return (
    <>
      <div className="products">
        <div className="products__title">
          <Text type="p"> Home / {title} </Text>
          <Text type="h3"> {title}'s Clothing and Apparel - New Arrivals </Text>
          <Text type="h5">Featured</Text>
        </div>
        <div className="cards">
          {data?.map((product) => (
            <ProductListing key={product.id} {...product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
