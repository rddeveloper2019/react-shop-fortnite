export function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SET_BASKETSHOW':
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    case 'SET_LOADING':
      return { ...state, loading: payload.current };
    case 'SET_DATA':
      return { ...state, data: payload.data || [] };
    case 'ADD_TO_BASKET':
      return {
        ...state,
        order: addToBasket(payload.id, state.data, state.order).newOrder,
        alertName: addToBasket(payload.id, state.data, state.order).alertName,
      };
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: removeFromBasket(payload.id, state.order, payload.totally),
      };
    case 'SET_ALERTNAME':
      return { ...state, alertName: payload.name };
    case 'CLOSE_ALERT':
      return { ...state, alertName: '' };
    default:
      return state;
  }
}

function removeFromBasket(id, order, totally = false) {
  let newArr = [...order];
  const idx = newArr.findIndex((el) => el.id === id);

  if (totally || newArr[idx].quantity === 1) {
    newArr = newArr.filter((el) => el.id !== id);
  } else {
    newArr[idx].quantity--;
  }
  return newArr;
}

function addToBasket(id, data, order) {
  let foundItem = data.filter((item) => item.id === id)[0];
  const newArr = [...order];
  const idx = newArr.findIndex((el) => el.id === id);
  let orderedItemName;
  if (idx < 0) {
    foundItem.quantity = 1;
    const { name, price, id, quantity } = foundItem;
    newArr.push({ name, price, id, quantity });
    orderedItemName = name;
  } else {
    newArr[idx].quantity++;
    orderedItemName = newArr[idx].name;
  }
  return { newOrder: newArr, alertName: orderedItemName };
}
