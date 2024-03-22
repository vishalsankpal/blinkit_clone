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

const categoryListSlice = createSlice({
  name: "categoryList",
  initialState,
  reducers: {
    getCategoryList: (state) => {
      state.isLoading = true;
    },
    getCategoryListSuccess: (state, action: PayloadAction<{ results: [] }>) => {
      console.log("getcategory list Success:", action);
      state.isLoading = false;
      state.data = action.payload.results;
      console.log("catedata", state.data);
      state.error = null;
    },
    getCategoryListFailed: (
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
  getCategoryList,
  getCategoryListSuccess,
  getCategoryListFailed,
} = categoryListSlice.actions;
export default categoryListSlice.reducer;
