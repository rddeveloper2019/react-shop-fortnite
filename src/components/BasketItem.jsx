import React, { useContext } from 'react';
import { ShopContext } from '../context';

function BasketItem(props) {
  const { addToBasket, removeFromBasket } = useContext(ShopContext);

  const { id, name, quantity, price } = props;
  return (
    <li className="collection-item ">
      <span>{name}: </span>
      <span>
        {' '}
        <span>
          <i
            className="material-icons basket-quantity"
            onClick={() => {
              removeFromBasket(id);
            }}
          >
            remove_circle
          </i>
        </span>
        {quantity}шт.
        <span
          onClick={() => {
            addToBasket(id);
          }}
        >
          <i className="material-icons basket-quantity">add_circle</i>
        </span>
      </span>

      <span> по {price} руб.</span>
      <span>
        {' '}
        = <b>{price * quantity} руб.</b>
      </span>

      <i
        className="material-icons right basket-quantity"
        onClick={() => {
          removeFromBasket(id, 'totally');
        }}
      >
        delete
      </i>
    </li>
  );
}

export { BasketItem };
