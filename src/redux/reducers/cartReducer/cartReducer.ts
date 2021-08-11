import {createSlice} from "@reduxjs/toolkit";
import {IcartItem} from "../../../interfaces/redux";

const init:{cartList : IcartItem[]} = {
    cartList : []
}

const cartReducer = createSlice({
    name : 'cartReducer',
    initialState : init,
    reducers : {
        add : (state , action) => {
            const newItem:IcartItem = {
                productId : action.payload.productId,
                number : action.payload.number,
                description : action.payload.description
            }

            state.cartList.push(newItem)
        },
        remove : (state,action)=>{
            state.cartList = state.cartList.filter(item => item.productId == action.payload.productId)
        },
        edit : (state,action)=>{
            const productFinder:number = state.cartList.findIndex(item => item.productId == action.payload.productId)

            productFinder >= 0 && (
                action.payload.order === '+' ?
                    state.cartList[productFinder].number ++ :
                    (state.cartList[productFinder].number != 1 ?
                        state.cartList[productFinder].number -- :
                        state.cartList = state.cartList.filter(item => item.productId === action.payload.productId))
            )
        }
    }
})

export const {add, remove, edit} = cartReducer.actions
export default cartReducer.reducer