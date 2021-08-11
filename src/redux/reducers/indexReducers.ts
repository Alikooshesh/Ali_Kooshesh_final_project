import productSeenReducer from "./productSeenReducer/productSeenReducer";
import {combineReducers} from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartReducer/cartReducer";

const combinedReducers = combineReducers({
    productSeen : productSeenReducer,
    cart : cartReducer
})

const persistedReducers = persistReducer({key:'rootPersistor',storage,whitelist:['productSeen']},combinedReducers)
export default persistedReducers