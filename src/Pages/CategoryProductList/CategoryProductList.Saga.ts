import { put, takeLatest } from "redux-saga/effects";
import {
  getCategoryProductListSuccess,
  getCategoryProductListFailed,
} from "./CategoryProductListSlice";
import { getRequest } from "../../services/http.service";

// interface category {
//   // Define the structure of your product here
//   // Example:
//   id: number;
// }

function* getCategoryProductList(action: { type: string }) {
  try {
    yield console.log("Request inside get category saga:", action);
    console.log("action from the category product list", action);
    const response = yield getRequest(
      `https://dummyjson.com/products/category/${action.payload.name}`
    );
    if (!response) {
      yield put(
        getCategoryProductListFailed({ error: "Unable to load product" })
      );
      return;
    }
    yield put(getCategoryProductListSuccess({ results: response.products }));
  } catch (e) {
    console.log("Error:", e);
    yield put(
      getCategoryProductListFailed({ error: "Unable to load products" })
    );
  }
}

function* getCategoryProductListAction() {
  yield takeLatest(
    "categoryProductList/getCategoryProductList",
    getCategoryProductList
  );
}

export default getCategoryProductListAction;
