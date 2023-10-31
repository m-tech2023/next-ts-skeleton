import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";
import userReducer from "./user/reducer";

const store = configureStore({
  reducer: {
    rootReducer,
    userReducer,
  },
});

export default store;
