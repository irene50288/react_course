import CartContainer from '../pages/Cart/CartContainer';
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
  products: state.cart.products,
})

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart(product) {
      dispatch(addToCart(product))
    },
    removeFromCart(product) {
      dispatch(removeFromCart(product))
    }
  }
}

connect(mapStateToProps, mapDispatchToProps)(CartContainer);

