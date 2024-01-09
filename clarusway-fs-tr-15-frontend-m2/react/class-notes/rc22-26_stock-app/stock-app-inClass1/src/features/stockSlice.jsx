import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firms: "",
  products: [],
  purchases: [],
  brands: [],
  sales: [],
  loading: false,
  error: false,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },

    firms: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.firms = payload;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {fetchStart,firms,fetchFail} = stockSlice.actions;

export default stockSlice.reducer;
