import ProductCard from '~src/components/pages/Catalog/ProductCard';
import {connect} from 'react-redux';
import * as cartActions from '~src/actions/Cart';
import {bindActionCreators} from 'redux';

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    // removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(ProductCard);

