import React, {Fragment} from 'react';
import {Redirect} from "react-router";
import { mainPath } from "~src/helpers/routes";

const calculatePrice = (total, product) => {
  return total + product.price;
}

const OrderSummary = ({products}) => {
  const price = products.reduce(calculatePrice, 0);
  const taxes = price * 0.3;
  return (
    // products.length > 0
    // ?
      <Fragment>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title} : ${product.price}</li>
          ))}
        </ul>
        <p>Total price: ${price}</p>
        <p>Taxes: ${(taxes).toFixed(2)}</p>
        <p>Total: ${(price + taxes).toFixed(2)}</p>
      </Fragment>
    // :
    //   <Redirect to={{
    //     pathname: mainPath(),
    //     state: {message: 'Your cart is empty'},
    //   }}/>
  )
}

export default OrderSummary;