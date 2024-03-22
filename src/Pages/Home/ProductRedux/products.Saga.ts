import { put, takeLatest } from "redux-saga/effects";
import { getProductsSuccess, getProductsFailed } from "./productSlice";
import { getRequest } from "../../../services/http.service";

interface Product {
  // Define the structure of your product here
  // Example:
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

function* getProducts(action: { type: string }) {
  try {
    yield console.log("Request inside getProducts saga:", action);
    const response: Product[] = yield getRequest<Product[]>(
      "https://dummyjson.com/products?limit=50"
    );
    if (!response) {
      yield put(getProductsFailed({ error: "Unable to load product" }));
      return;
    }
    yield put(getProductsSuccess({ results: response }));
  } catch (e) {
    console.log("Error:", e);
    yield put(getProductsFailed({ error: "Unable to load products" }));
  }
}

function* getProductsAction() {
  yield takeLatest("products/getProducts", getProducts);
}

export default getProductsAction;
