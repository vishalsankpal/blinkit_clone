import { put, takeLatest } from "redux-saga/effects";
import {
  getCategoryListSuccess,
  getCategoryListFailed,
} from "./categoryListSlice";
import { getRequest } from "../../../services/http.service";

// interface category {
//   // Define the structure of your product here
//   // Example:
//   id: number;
// }

function* getCategoryList(action: { type: string }) {
  try {
    yield console.log("Request inside get category saga:", action);
    const response = yield getRequest(
      "https://dummyjson.com/products/categories"
    );
    if (!response) {
      yield put(getCategoryListFailed({ error: "Unable to load product" }));
      return;
    }
    yield put(getCategoryListSuccess({ results: response }));
  } catch (e) {
    console.log("Error:", e);
    yield put(getCategoryListFailed({ error: "Unable to load products" }));
  }
}

function* getCategoryListAction() {
  yield takeLatest("categoryList/getCategoryList", getCategoryList);
}

export default getCategoryListAction;
