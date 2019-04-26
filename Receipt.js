export default class Receipt {
    constructor (products = []) {
        this.products = products;
    }

    get totalAmount() {
        return this.products.length;
    }

    get totalPrice() {
        return this.products.reduce(
            (total, current) => total + current.price,
            0
        )
    }

    add(product = {}) {
        this.products.push(product);
    }

    remove(id) {
        const index = this.products.findIndex( item => {
            return item.id === id;
        } )
        if (index !== -1) this.products.splice(index,1);

    }
}