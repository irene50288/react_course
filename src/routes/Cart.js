import {cartPagePath} from '~src/helpers/routes';
import CartPageContainer from '~src/components/containers/CartPageContainer';
import {loadCartState} from '~src/actions/Cart';

export default {
  path: cartPagePath(),
  component: CartPageContainer,
  prepareData: (store) => {
    store.dispatch(loadCartState());
  },
};
