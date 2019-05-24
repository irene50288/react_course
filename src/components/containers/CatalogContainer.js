import CatalogPage from '../pages/Catalog/CatalogPage';
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
  products: state.catalog.products,
  isFetching: state.catalog.isFetching,
  error: state.catalog.error,
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCatalog() {
      dispatch(fetchCatalog());
    }
  }
}

connect(mapStateToProps, mapDispatchToProps)(CatalogPage);

