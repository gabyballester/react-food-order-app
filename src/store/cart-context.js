import { createContext } from 'react';

export default CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => { },
  removeItem: (id) => { }
})

