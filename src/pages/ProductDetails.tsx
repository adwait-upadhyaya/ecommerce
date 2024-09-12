import { useParams } from "react-router-dom";
import { useGetProductsByIdQuery } from "../services/products";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faSolidStar } from "@fortawesome/free-solid-svg-icons";
import Button from "../atoms/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/cartSlice";
import Loading from "../components/Loader";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductsByIdQuery(Number(id));
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <>Oh no, there was an error</>;
  }

  const ratings = [];
  const stars = Number(data?.rating?.rate);

  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(stars)) {
      ratings.push(<FontAwesomeIcon icon={faSolidStar} key={i} size="xs" />);
    } else if (i === Math.floor(stars) && stars % 1 >= 0.5) {
      ratings.push(<FontAwesomeIcon icon={faSolidStar} key={i} size="xs" />);
    } else {
      ratings.push(<FontAwesomeIcon icon={faStar} key={i} size="xs" />);
    }
  }

  const handleCartAdd = () => {
    const cartItem = {
      id: data!.id,
      title: data!.title,
      image: data!.image,
      quantity: 1,
      price: data!.price,
      totalPrice: data!.price,
    };
    toast.success("Added to Cart", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    dispatch(addItem(cartItem));
  };

  return (
    <>
      <ToastContainer />

      <div className="details">
        <div className="details__left">
          <Image src={data?.image} width="412" height="508" />
          <Image src={data?.image} width="412" height="508" />
        </div>
        <div className="details__right">
          <div className="details__right__category">
            <Text type="p">{data?.category}</Text>
          </div>
          <div className="details__right__content">
            <div className="details__right__content__title">
              <Text type="h3" color="black">
                {data?.title}
              </Text>
            </div>
            <div className="details__right__content__price">
              <Text type="h4" color="#737373">
                <span id="linethrough">${data!.price.toFixed(2)}</span>
              </Text>
              <Text type="h4">
                {(data!.price - data!.price * 0.3).toFixed(2)}
              </Text>
            </div>
          </div>
          <div className="details__right__ratings">
            <Text type="h3" color="black">
              {ratings}
            </Text>
            <Text type="p">
              {data?.rating?.rate} ({data?.rating?.count} reviews)
            </Text>
          </div>
          <div className="details__right__description">
            <Text type="h6">{data?.description}</Text>
          </div>

          <div className="details__right__button">
            <Button
              type="secondary"
              paddingY="12px"
              paddingX="140px"
              onClick={handleCartAdd}
            >
              <Text type="h5" color="white">
                Add to Bag
              </Text>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
