import CartButton from '/components/pages/Cart/CartButton';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import *  as cartActions from '/actions/Cart';

const mapStateToProps = (state) => ({
  cartProducts: state.cart.products,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadCartState: bindActionCreators(cartActions.loadCartState, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartButton);

