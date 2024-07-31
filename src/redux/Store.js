import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import RootReducer from "./RootReducer";
import { thunk } from "redux-thunk";

const Store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: [thunk],
      serializableCheck: false,
     
    }),
});

export const persistor = persistStore(Store);
export default Store;