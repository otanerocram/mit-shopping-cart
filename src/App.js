import { useState } from 'react';
import { Button } from "react-bootstrap";


function ShoppingCart({availableItems}) {
  //const { Button } = ReactBootstrap;

  // TODO: create state for stock and cart using React.useState
  const [stock, setStock] = useState(availableItems);
  const [cart, setCart] = useState([]);

  const moveToCart = (e) => {
    // TODO: create product and numInStock variables
    const [product, numInStock]= e.target.innerHTML.split(":");
    console.log(`product  ${product}, numInStock  ${numInStock}`);
    
    // TODO: Determine if numInStock is greater than 0. If not, find the product that was clicked and update its numInStock
    if (parseInt(numInStock)===0){
      return
    }

    // TODO: Update the stock state to include the new stock

    let newStock = stock.map( (elem, idx) => {
      if (elem.product === product) elem.inStock--
      return elem
    })
    
    setStock(newStock);
    
    // TODO: Update the cart state to include the updated item
    setCart([...cart, {product: product}])
  };

  // No need to update code beyond this point
  const availableItemsButtons = availableItems.map((item, index) => {
    return (
      <Button variant="warning" id={item.product} key={index} onClick={moveToCart}>
        {item.product}:{item.inStock}
      </Button>
    );
  });

  return (
    <>
      <ul key="stock" style={{ listStyleType: 'none' }}>
        {availableItemsButtons}
      </ul>
      <h1>Shopping Cart</h1>
      <Cart cartitems={cart}> Cart Items</Cart>
    </>
  );
}

function Cart({ cartitems }) {
  //const { Button } = ReactBootstrap;
  console.log('rendering Cart');
  console.log(cartitems);
  const availableItemsButtons = cartitems.map((item, index) => {
    return (
      <Button variant="info" id={item.product} key={index}>
        {item.product}
      </Button>
    );
  });
  return (
    <ul id="cart-items" style={{ listStyleType: 'none' }} key="cart">
      {availableItemsButtons}
    </ul>
  );
}

export default ShoppingCart;
