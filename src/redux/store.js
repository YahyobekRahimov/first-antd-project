import { configureStore } from "@reduxjs/toolkit";

import teachersSlice from "./teachersSlice";

const store = configureStore({
   reducer: {
      teachers: teachersSlice,
   },
});

const subscribe = store.subscribe(() =>
   console.log(store.getState())
);

export default store;
