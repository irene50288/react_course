import MainPage from "../components/pages/MainPage";
import {mainPath} from "../helpers/routes";

export default {
  path: mainPath(),
  component: MainPage,
  exact: true,
  strict: true,
}