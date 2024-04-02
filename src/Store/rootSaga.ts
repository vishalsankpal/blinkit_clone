import { all, fork } from "redux-saga/effects";
import getCategoryListAction from "../Pages/Home/CategoryRedux/categoryList.Saga";
import getProductsAction from "../Pages/Home/ProductRedux/products.Saga";
import getCategoryProductListAction from "../Pages/CategoryProductList/CategoryProductList.Saga";
import getCartItemListAction from "../Pages/MiniCart/MiniCart.Saga";

export default function* rootSaga() {
  yield all([
    fork(getProductsAction),
    fork(getCategoryListAction),
    fork(getCategoryProductListAction),
    fork(getCartItemListAction),
  ]);
}
