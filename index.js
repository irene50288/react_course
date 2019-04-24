import Receipt from './Receipt'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const receipt = new Receipt([]);
        receipt.add( { id: 1, name: 'Milk', price: 5.99 } );
        receipt.add( { id: 2, name: 'Eggs', price: 3.56 } );
        receipt.add( { id: 3, name: 'Sugar', price: 4.25 } );
        receipt.add( { id: 4, name: 'Flour', price: 9.74 } );
        receipt.add( { id: 5, name: 'Pizza', price: 10.99 } );
        receipt.remove(5);

        return (
            <div>
                <ul>
                    {
                        receipt.products.map( product => {
                            return <li key={product.id}>{product.name}..........{product.price}</li>
                        })
                    }
                </ul>
                <p>Total amount..........{receipt.totalAmount}</p>
                <p>Total price..........{receipt.totalPrice}</p>
            </div>
        )
    }

}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)