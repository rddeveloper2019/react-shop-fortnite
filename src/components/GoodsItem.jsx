import { ShopContext } from '../context.js';
import { useContext } from 'react';

function GoodsItem(props) {
  const { addToBasket } = useContext(ShopContext);

  const { id, name, description, price, full_background } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn" onClick={() => addToBasket(id)}>
          Купить
        </button>
        <span className="right" style={{ fontSize: '1.8rem' }}>
          {price} руб.
        </span>
      </div>
    </div>
  );
}
export { GoodsItem };
