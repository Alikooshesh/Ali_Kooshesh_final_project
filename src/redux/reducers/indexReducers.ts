import productSeenReducer from "./productSeenReducer/productSeenReducer";
import {combineReducers} from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";

const combinedReducers = combineReducers({
    productSeen : productSeenReducer
})

const persistedReducers = persistReducer({key:'rootPersistor',storage,whitelist:['productSeen']},combinedReducers)
export default persistedReducers