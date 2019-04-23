import Arithmetic from './Arithmetic'
import React, { Component } from 'react';
import ReactDom from 'react-dom';

console.log(`1 + 2 = ${Arithmetic.add(1,2)}`);
console.log(`2 - 1 = ${Arithmetic.subtract(2,1)}`);
console.log(`2 * 3 = ${Arithmetic.multiply(2,3)}`);
console.log(`6 / 3 = ${Arithmetic.divide(6,3)}`);
console.log(`6 div 4 = ${Arithmetic.intDivide(6,4)}`);
console.log(`6 mod 4 = ${Arithmetic.remainder(6,4)}`);


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Hello World!</div>
        )
    }

}

ReactDom.render(
    <App/>,
    document.getElementById('root')
)