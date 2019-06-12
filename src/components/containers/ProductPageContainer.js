import ProductPage from 'components/pages/Catalog/ProductPage';
import {connect} from 'react-redux';
import * as productActions from 'actions/Product';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) => ({
  product: state.product.product,
  isFetching: state.product.isFetching,
  error: state.product.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: bindActionCreators(productActions.fetchProduct, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);

