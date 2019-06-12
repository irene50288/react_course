import CartProductCard from '/components/pages/Cart/CartProductCard';
import {connect} from 'react-redux';
import * as cartActions from '/actions/Cart';
import {bindActionCreators} from 'redux';

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(CartProductCard);

