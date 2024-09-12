import { ErrorBoundary } from "react-error-boundary";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import CartItem from "../molecules/CartItem";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

interface ICart {
  closeCart: () => void;
}
const Cart = (props: ICart) => {
  const { closeCart } = props;
  const { items, totalAmount } = useSelector((state: RootState) => state.cart);

  return (
    <>
      <div className="cart">
        <div className="cart__title">
          <Text type="h4">Your Cart</Text>
          <Button type="primary" onClick={closeCart}>
            X
          </Button>
        </div>
        <div className="cart__items">
          {items.map((item) => (
            <ErrorBoundary fallback={<div>Something Went Wrong</div>}>
              <CartItem key={item.id} {...item} />
            </ErrorBoundary>
          ))}
        </div>
        <div className="cart__total">
          <Text type="h4">Subtotal</Text>
          <Text type="h4">Total: ${totalAmount.toFixed(2)}</Text>
        </div>

        <div className="cart__buttons">
          <Button
            type="secondary"
            onClick={closeCart}
            paddingX="124px"
            paddingY="12px"
          >
            <Text type="h6" color="white">
              CONTINUE TO CHECKOUT
            </Text>
          </Button>
          <Text type="p">Psst, get it now before it sells out</Text>
        </div>
      </div>
    </>
  );
};

export default Cart;
