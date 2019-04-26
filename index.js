import Receipt from './Receipt'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class App extends Component {

  render() {
    const receipt = new Receipt([]);
    receipt.add({id: 1, name: 'Milk', price: 5.99});
    receipt.add({id: 2, name: 'Eggs', price: 3.56});
    receipt.add({id: 3, name: 'Sugar', price: 4.25});
    receipt.add({id: 4, name: 'Flour', price: 9.74});
    receipt.add({id: 5, name: 'Pizza', price: 10.99});
    receipt.remove(5);

    return (
      <div className='receipt'>
        <ul>
          {
            receipt.products.map(product => {
              return (
                <li key={product.id}>
                  <span className='product-name'>{product.name}</span>
                  <span className='product-price'>${product.price}</span>
                </li>
              )
            })
          }
        </ul>
        <div>
          <span className='product-name'>Total amount</span>
          <span className='product-price'>${receipt.totalAmount}</span>
        </div>
        <div>
          <span className='product-name'>Total price</span>
          <span className='product-price'>${receipt.totalPrice}</span>
        </div>
      </div>
    )
  }

}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)