import { BasketItem } from './BasketItem';
import { ShopContext } from '../context.js';
import { useContext } from 'react';

function BasketList(props) {
  const { order = [], setBasketShow } = useContext(ShopContext);
  const { orderDetails = {} } = props;

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">
        <span>Корзина</span>
        <i
          className="material-icons right"
          onClick={() => {
            setBasketShow();
          }}
        >
          close
        </i>
      </li>
      {order.length ? (
        order.map((item) => {
          return <BasketItem key={item.id} {...item} />;
        })
      ) : (
        <li className="collection-item ">Пусто</li>
      )}

      <li className="collection-item  active">
        Всего товаров: <b>{orderDetails.quantity}</b> шт. Общая сумма:{' '}
        <b>{orderDetails.sum}</b> руб.
        <button className="secondary-content btn btn-small">
          Оформить заказ
        </button>
      </li>
    </ul>
  );
}
export { BasketList };
