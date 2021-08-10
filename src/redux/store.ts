import {createStore} from "@reduxjs/toolkit";
import persistedReducers from "./reducers/indexReducers";
import {persistStore} from "redux-persist";

export const store = createStore(persistedReducers)
export const persistore = persistStore(store)