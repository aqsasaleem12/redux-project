import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import dataapiSlice from "../redux_setup/dataapiSlice";
// import authSlice from "../redux_setup/authSlice";


import dataApiSlice from "../redux/dataApiSlice";
import dataSlice from "../redux/dataSlice";
const reducer = combineReducers({
  dataSlice,
  [dataApiSlice.reducerPath]: dataApiSlice.reducer,
});
const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({}).concat(dataApiSlice.middleware)
});
export default store;
