import OrderPage from '~src/components/pages/Order/OrderPage'
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  cartProducts: state.cart.products,
});

export default connect(mapStateToProps)(OrderPage);

