import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import newsReducer from "../features/newsApiSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    newsApi: newsReducer,
  },
  //? eger geliştirme asaması production ise o zaman aşagıdaki ifade false döndürür ve dolayısıyla devTool kullanıma kaplı olur
  devTools: process.env.NODE_ENV !== "production",
});
