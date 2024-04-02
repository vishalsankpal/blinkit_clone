import { put, takeLatest } from "redux-saga/effects";
import { getRequest } from "../../services/http.service";
import { getCartitemListFailed, getCartItemListSuccess } from "./MiniCartSlice";
function* getCartItemList(action: { type: string }) {
  try {
    yield console.log("Request inside get mini cart saga:", action.payload.id);
    const response = yield getRequest(
      `https://dummyjson.com/carts/user/${action.payload.id}`
    );
    if (!response) {
      yield put(getCartitemListFailed({ error: "Something went wrong" }));
      return;
    }
    yield put(getCartItemListSuccess({ results: response.carts[0] }));
  } catch (e) {
    console.log("Error:", e);
    yield put(getCartitemListFailed({ error: "Unable to load cart items" }));
  }
}

function* getCartItemListAction() {
  yield takeLatest("cartItemList/getCartItemList", getCartItemList);
}
export default getCartItemListAction;
