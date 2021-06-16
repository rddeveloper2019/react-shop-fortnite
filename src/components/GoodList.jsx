import { GoodsItem } from './GoodsItem';
import { ShopContext } from '../context.js';
import { useContext } from 'react';

function GoodList() {
  const { data: goods } = useContext(ShopContext);
  return (
    <div className="goods">
      {goods.map((item) => {
        return <GoodsItem key={item.id} {...item} />;
      })}
    </div>
  );
}
export { GoodList };
