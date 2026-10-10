import { configureStore } from "@reduxjs/toolkit";
import { CityShopSlice } from "./CityShopSlice";

export const store = configureStore({
  reducer: {
    cityShop: CityShopSlice.reducer,
  },
});
