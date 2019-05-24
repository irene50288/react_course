import CatalogPage from '../pages/Catalog/CatalogPage';
import {connect} from "react-redux";
import * as catalogActions from '~src/actions/Catalog';
import {bindActionCreators} from "redux";

const mapStateToProps = (state) => ({
  products: state.catalog.products,
  isFetching: state.catalog.isFetching,
  error: state.catalog.error,
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCatalog: bindActionCreators(catalogActions.fetchCatalog, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogPage);

