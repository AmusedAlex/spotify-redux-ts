import albumReducer from "../reducers/albumReducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const bigReducer = combineReducers({
  albums: albumReducer,
});

export const store = configureStore({
  reducer: bigReducer,
});
