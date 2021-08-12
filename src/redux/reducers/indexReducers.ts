import productSeenReducer from "./productSeenReducer/productSeenReducer";
import {combineReducers} from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartReducer/cartReducer";
import userAuthReducer from "./userAuthReducer/userAuthReducer";

const combinedReducers = combineReducers({
    productSeen : productSeenReducer,
    cart : cartReducer,
    userAuth : userAuthReducer
})

const persistedReducers = persistReducer({key:'rootPersistor',storage,whitelist:['productSeen' , 'cart' , 'userAuth']},combinedReducers)
export default persistedReducers