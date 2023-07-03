import { configureStore } from "@reduxjs/toolkit";
import reducerUser from "./user";
import carsReducer from "./cars";

const store = configureStore({
  reducer: {
    user: reducerUser,
    cars: carsReducer,
  },
});

export default store;
