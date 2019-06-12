import ProductCard from '/components/pages/Catalog/ProductCard';
import {connect} from 'react-redux';
import * as cartActions from '/actions/Cart';
import {bindActionCreators} from 'redux';

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: bindActionCreators(cartActions.addToCart, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(ProductCard);

