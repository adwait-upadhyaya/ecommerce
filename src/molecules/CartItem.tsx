import { useDispatch } from "react-redux";
import Button from "../atoms/Button";
import Image from "../atoms/Image";
import Text from "../atoms/Text";
import { IProduct } from "../interfaces/IProduct";
import {
  addItem,
  decreaseQuantity,
  removeItem,
} from "../store/slices/cartSlice";

const CartItem = (
  props: Pick<IProduct, "id" | "title" | "price" | "image" | "quantity">
) => {
  const { id, title, price, image, quantity } = props;
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      addItem({ id, title, price, image, quantity: 1, totalPrice: price })
    );
  };

  const handleRemove = () => {
    dispatch(decreaseQuantity({ id }));
  };

  const handleTrashClick = () => {
    dispatch(removeItem({ id }));
  };

  return (
    <>
      <div className="cart__items__item">
        <div className="cart__items__item__image">
          <Image src={image} />
        </div>
        <div className="cart__items__item__info">
          <div className="top">
            <Text type="h6">{title}</Text>
            <Button type="primary" onClick={handleTrashClick}>
              <Image src="/images/Trash.svg" height="16px" width="16px" />
            </Button>
          </div>
          <div className="bottom">
            <Text type="p" color="#737373">
              ${Number(price.toFixed(2)) * quantity!}
            </Text>
            <div className="bottom__button">
              <Button type="primary" onClick={handleAdd}>
                +
              </Button>
              <Text type="p">{quantity}</Text>
              <Button type="primary" onClick={handleRemove}>
                -
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
