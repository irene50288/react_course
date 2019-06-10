import OrderPage from '~src/components/pages/Order/OrderPage'
import {connect} from 'react-redux';
import * as actions from '~src/actions/Cart';
import {bindActionCreators} from 'redux';


const mapStateToProps = (state) => ({
  cartProducts: state.cart.products,
});

export default connect(mapStateToProps)(OrderPage);

