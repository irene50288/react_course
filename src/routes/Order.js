import {orderPagePath} from '/helpers/routes';
import {loadCartState} from '/actions/Cart';
import OrderPageContainer from "/components/containers/OrderPageContainer";

export default {
  path: orderPagePath(),
  component: OrderPageContainer,
  prepareData: (store) => {
    store.dispatch(loadCartState());
  },
};
