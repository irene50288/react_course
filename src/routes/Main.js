import CatalogContainer from '~src/components/containers/CatalogContainer';
import {mainPath} from '~src/helpers/routes';
import {fetchCatalog} from "~src/actions/Catalog";

export default {
  path: mainPath(),
  component: CatalogContainer,
  exact: true,
  strict: true,
  prepareData: (store) => {
    store.dispatch(fetchCatalog());
  }
};
