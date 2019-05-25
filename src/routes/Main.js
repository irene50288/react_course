import CatalogContainer from '~src/components/containers/CatalogContainer';
import {mainPath} from '~src/helpers/routes';

export default {
  path: mainPath(),
  component: CatalogContainer,
  exact: true,
  strict: true,
};
