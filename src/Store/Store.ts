// https://api.escuelajs.co/api/v1/products
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import getProductsAction from "../Pages/Home/products.Saga";
import productSlice from "../Pages/Home/productSlice";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    products: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(getProductsAction);
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
