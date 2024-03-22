import { all, fork } from "redux-saga/effects";
import getCategoryListAction from "../Pages/Home/CategoryRedux/categoryList.Saga";
import getProductsAction from "../Pages/Home/ProductRedux/products.Saga";

export default function* rootSaga() {
  yield all([fork(getProductsAction), fork(getCategoryListAction)]);
}
