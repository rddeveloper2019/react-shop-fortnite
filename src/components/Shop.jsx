import { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodList } from './GoodList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';
import { ShopContext } from '../context.js';

function Shop() {
  const { setData, alertName, order, loading, setLoading, isBasketShow } =
    useContext(ShopContext);

  //^EFFECT
  useEffect(function fetchData() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const newData = data.featured.map((item) => {
          return { ...item, quantity: 0 };
        });
        setData(newData);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  const orderDetails = order.reduce(
    (acc, el) => {
      acc.quantity += +el.quantity;
      acc.sum += +el.quantity * +el.price;
      return acc;
    },
    { quantity: 0, sum: 0 }
  );

  return (
    <div className="container content">
      {loading ? <Preloader /> : <GoodList />}
      <Cart orderDetails={orderDetails} />
      {isBasketShow && <BasketList orderDetails={orderDetails} />}
      {alertName && <Alert />}
    </div>
  );
}
export { Shop };
