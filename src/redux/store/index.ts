import albumReducer from "../reducers/albumReducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import artistReducer from "../reducers/artistReducer";

const bigReducer = combineReducers({
  albums: albumReducer,
  artists: artistReducer,
});

export const store = configureStore({
  reducer: bigReducer,
});
