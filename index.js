import Arithmetic from './Arithmetic'
import React, { Component } from 'react';
import ReactDom from 'react-dom';


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                <li>1 + 2 = {Arithmetic.add(1,2)}</li>
                <li>2 - 1 = {Arithmetic.subtract(2,1)}</li>
                <li>2 * 3 = {Arithmetic.multiply(2,3)}</li>
                <li>6 / 3 = {Arithmetic.divide(6,3)}</li>
                <li>6 div 4 = {Arithmetic.intDivide(6,4)}</li>
                <li>6 mod 4 = {Arithmetic.remainder(6,4)}</li>
            </ul>
        )
    }

}

ReactDom.render(
    <App/>,
    document.getElementById('root')
)