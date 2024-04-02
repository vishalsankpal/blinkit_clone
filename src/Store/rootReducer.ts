import productSlice from "../Pages/Home/ProductRedux/productSlice";
import categoryListSlice from "../Pages/Home/CategoryRedux/categoryListSlice";
import CategoryProductListSlice from "../Pages/CategoryProductList/CategoryProductListSlice";
import cartItemListSlice from "../Pages/MiniCart/MiniCartSlice";
const reducer = {
  products: productSlice,
  categoryList: categoryListSlice,
  categoryProductList: CategoryProductListSlice,
  cartItemList: cartItemListSlice,
};

export default reducer;
