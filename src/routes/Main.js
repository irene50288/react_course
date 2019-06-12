import CatalogContainer from '/components/containers/CatalogContainer';
import {mainPath} from '/helpers/routes';
import {fetchCatalog} from "/actions/Catalog";

export default {
  path: mainPath(),
  component: CatalogContainer,
  exact: true,
  strict: true,
  prepareData: (store) => {
    store.dispatch(fetchCatalog());
  }
};
