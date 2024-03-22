import productSlice from "../Pages/Home/ProductRedux/productSlice";
import categoryListSlice from "../Pages/Home/CategoryRedux/categoryListSlice";
import CategoryProductListSlice from "../Pages/CategoryProductList/CategoryProductListSlice";

const reducer = {
  products: productSlice,
  categoryList: categoryListSlice,
  categoryProductList: CategoryProductListSlice,
};

export default reducer;
