import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  isLoading: boolean;
  data: any[] | null;
  error: string | null;
}

const initialState: ProductState = {
  isLoading: false,
  data: null,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state) => {
      state.isLoading = true;
    },
    getProductsSuccess: (state, action: PayloadAction<{ results: any[] }>) => {
      console.log("getproduct Success:", action);
      state.isLoading = false;
      state.data = action.payload.results;
      state.error = null;
    },
    getProductsFailed: (state, action: PayloadAction<{ error: string }>) => {
      state.isLoading = false;
      state.data = [];
      state.error = action.payload.error;
    },
  },
});

export const { getProducts, getProductsSuccess, getProductsFailed } =
  productSlice.actions;
export default productSlice.reducer;
