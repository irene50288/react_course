import CartButton from '~src/components/pages/Cart/CartButton';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import *  as cartActions from '~src/actions/Cart';

const mapStateToProps = (state) => ({
  cartProducts: state.cart.products,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadCartState: bindActionCreators(cartActions.loadCartState, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartButton);

