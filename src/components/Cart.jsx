import { useContext } from 'react';
import { ShopContext } from '../context.js';

function Cart(props) {
  const { order, setBasketShow } = useContext(ShopContext);
  const quantity = order.length;
  const { orderDetails = {} } = props;
  return (
    <div className="cart" onClick={setBasketShow}>
      <div>
        <i className="large material-icons blue darken-4 yellow-text">
          shopping_cart
        </i>
      </div>
      {quantity ? (
        <span className="basket-quantity blue darken-4 yellow-text">
          {orderDetails.quantity} шт- {orderDetails.sum} руб.
        </span>
      ) : null}
    </div>
  );
}
export { Cart };
