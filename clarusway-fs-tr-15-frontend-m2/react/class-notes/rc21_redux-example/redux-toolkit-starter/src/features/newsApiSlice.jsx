import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  newsData: [],
  error: false,
  loading: false,
};
export const getNewsData = createAsyncThunk(
  "getNews",

  async () => {
    const API_KEY = "ed90ae8425cb429c960aae7d6305635f";
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
    const data = await axios(url);
    console.log(data.data.articles);
    return data.data.articles;
  }
);
const newsApiSlice = createSlice({
  name: "newsApi",
  initialState,
  reducers: {
    clearNewsData: (state, action) => {
      state.newsData = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNewsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNewsData.fulfilled, (state, action) => {
        state.loading = false;
        state.newsData = action.payload;
      })
      .addCase(getNewsData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const {clearNewsData} = newsApiSlice.actions;

export default newsApiSlice.reducer;
