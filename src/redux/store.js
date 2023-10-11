import { configureStore } from "@reduxjs/toolkit";
import favoritReducer from "./slice"
const store = configureStore({
  reducer: {
    favorites:favoritReducer
  },
});
 export default store;
 