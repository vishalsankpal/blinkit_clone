import productSlice from "../Pages/Home/ProductRedux/productSlice";
import categoryListSlice from "../Pages/Home/CategoryRedux/categoryListSlice";

const reducer = {
  products: productSlice,
  categoryList: categoryListSlice,
};

export default reducer;
