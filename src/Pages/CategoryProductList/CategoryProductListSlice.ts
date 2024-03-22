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

const categoryProductListSlice = createSlice({
  name: "categoryProductList",
  initialState,
  reducers: {
    getCategoryProductList: (state) => {
      state.isLoading = true;
    },
    getCategoryProductListSuccess: (
      state,
      action: PayloadAction<{ results: [] }>
    ) => {
      console.log("getcategoryProduct list Success:", action);
      state.isLoading = false;
      state.data = action.payload.results;
      state.error = null;
    },
    getCategoryProductListFailed: (
      state,
      action: PayloadAction<{ error: string }>
    ) => {
      state.isLoading = false;
      state.data = [];
      state.error = action.payload.error;
    },
  },
});

export const {
  getCategoryProductList,
  getCategoryProductListSuccess,
  getCategoryProductListFailed,
} = categoryProductListSlice.actions;
export default categoryProductListSlice.reducer;
