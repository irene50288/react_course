import CartWrapper from '../pages/Cart/CartWrapper';
import {connect} from "react-redux";
import * as actions from '~src/actions/Cart';
import {bindActionCreators} from "redux";


const mapStateToProps = (state) => ({
  products: state.cart.products,
})

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: bindActionCreators(actions.addToCart, dispatch),
    removeFromCart: bindActionCreators(actions.removeFromCart, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartWrapper);

