import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCart from './App';

const availableItems = [
  { product: 'Jacket', inStock: 2 },
  { product: 'Pants', inStock: 3 },
  { product: 'Scarf', inStock: 0 },
  { product: 'Pajamas', inStock: 3 },
  { product: 'Shirt', inStock: 1 },
];

ReactDOM.render(
  <React.StrictMode>
    <ShoppingCart availableItems={availableItems} />
  </React.StrictMode>,
  document.getElementById('root')
);
