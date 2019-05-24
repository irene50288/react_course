import MainPage from "../components/pages/Main/MainPage";
import CatalogContainer from "../components/containers/CatalogContainer";
import {mainPath} from "../helpers/routes";

export default {
  path: mainPath(),
  component: CatalogContainer,
  exact: true,
  strict: true,
}