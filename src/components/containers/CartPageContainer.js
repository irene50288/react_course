import Cart from '~src/components/pages/Cart/Cart'
import {connect} from 'react-redux';
import * as actions from '~src/actions/Cart';
import {bindActionCreators} from 'redux';


const mapStateToProps = (state) => ({
  cartProducts: state.cart.products,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: bindActionCreators(actions.addToCart, dispatch),
    removeFromCart: bindActionCreators(actions.removeFromCart, dispatch),
    loadCartState: bindActionCreators(actions.loadCartState, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

