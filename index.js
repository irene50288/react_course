import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Products from './constants/Products';

class Image extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const product = this.props.product;
        return (
            <img src={product.imageUrl} width='100' height='100' alt={product.title}/>
        )
    }
}

class TextBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const product = this.props.product;
        return (
            <span>{product.title}</span>
        )
    }
}

class Price extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const product = this.props.product;
        return <span>{product.price}</span>
    }
}

class ProductCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const product = this.props.product;
        return (
            <div>
                <TextBox product={product}/>
                <Price product={product}/>
                <Image product={product}/>
            </div>
        )
    }
}

class Catalog extends Component {
    render() {
        const { products } = this.props;
        return (
            <ul>
                {
                    products.map(product => {
                        return <li key = {product.id}><ProductCard product={product}/></li>
                    })
                }
            </ul>
        )
    }
}

class CatalogPage extends Component {
    render() {
        const products = Products;
        return (
            <Catalog products={products}/>
        )
    }

}

ReactDOM.render(
    <CatalogPage/>,
    document.getElementById('root')
)