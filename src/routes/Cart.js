import {cartPagePath} from '/helpers/routes';
import CartPageContainer from '/components/containers/CartPageContainer';
import {loadCartState} from '/actions/Cart';

export default {
  path: cartPagePath(),
  component: CartPageContainer,
  prepareData: (store) => {
    store.dispatch(loadCartState());
  },
};
