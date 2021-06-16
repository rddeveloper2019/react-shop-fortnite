import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
  data: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: '',
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  value.setAlertName = (name) => {
    dispatch({ type: 'SET_ALERTNAME', payload: { name: name } });
  };

  value.removeFromBasket = (itemId, totally = false) => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      payload: { id: itemId, totally: totally },
    });
  };

  value.addToBasket = (id) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: { id: id } });
  };

  value.setData = (data = []) => {
    dispatch({ type: 'SET_DATA', payload: { data: data } });
  };
  value.setLoading = (current = false) => {
    dispatch({ type: 'SET_LOADING', payload: { current } });
  };

  value.setBasketShow = () => {
    dispatch({ type: 'SET_BASKETSHOW' });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
