import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk"
import profile from "./features/Home/slice";

const makeStore = () =>
  configureStore({
    reducer: {
      [profile.name]: profile.reducer
    },
    middleware: [thunkMiddleware],
    devTools: process.env.NODE_ENV === "development",
  });

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
