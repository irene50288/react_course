import OrderPage from '/components/pages/Order/OrderPage'
import {connect} from 'react-redux';
import * as actions from '/actions/Cart';
import {bindActionCreators} from 'redux';


const mapStateToProps = (state) => ({
  cartProducts: state.cart.products,
});

export default connect(mapStateToProps)(OrderPage);

