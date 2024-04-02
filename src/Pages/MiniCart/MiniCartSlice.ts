import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  isLoading: boolean;
  data: any[] | null;
  error: string | null;
}

const initialState: CartState = {
  isLoading: false,
  data: null,
  error: null,
};

const cartItemListSlice = createSlice({
  name: "cartItemList",
  initialState,
  reducers: {
    getCartItemList: (state) => {
      state.isLoading = true;
    },
    getCartItemListSuccess: (state, action: PayloadAction<{ results: [] }>) => {
      state.isLoading = false;
      state.data = action.payload.results;
      state.error = null;
    },
    getCartitemListFailed: (
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
  getCartItemList,
  getCartItemListSuccess,
  getCartitemListFailed,
} = cartItemListSlice.actions;

export default cartItemListSlice.reducer;
