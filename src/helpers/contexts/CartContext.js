import { createContext } from 'react';

export default createContext({
  cartProducts: [],
  addToCart: (product) => {}
});