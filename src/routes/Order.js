import {orderPagePath} from '~src/helpers/routes';
import {loadCartState} from '~src/actions/Cart';
import OrderPageContainer from "~src/components/containers/OrderPageContainer";

export default {
  path: orderPagePath(),
  component: OrderPageContainer,
  prepareData: (store) => {
    store.dispatch(loadCartState());
  },
};
