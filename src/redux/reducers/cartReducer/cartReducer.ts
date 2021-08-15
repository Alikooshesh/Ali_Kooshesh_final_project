import {createSlice} from "@reduxjs/toolkit";
import {IcartItem} from "../../../interfaces/redux";

const init:{cartList : IcartItem[]} = {
    cartList : []
}

const cartReducer = createSlice({
    name: 'cartReducer',
    initialState: init,
    reducers: {
        add: (state, action) => {
            const newItem: IcartItem = {
                productId: action.payload.productId,
                productName : '',
                productTitleFA : '',
                mainImg : '',
                price: 0,
                offPercent: 0,
                number: action.payload.number,
                description: action.payload.description
            }

            state.cartList.push(newItem)
        },
        remove: (state, action) => {
            state.cartList = state.cartList.filter(item => item.productId != action.payload.productId)
        },
        editNumber: (state, action) => {
            const productFinder: number = state.cartList.findIndex(item => item.productId == action.payload.productId)

            productFinder >= 0 && (
                action.payload.order === '+' ?
                    state.cartList[productFinder].number++ :
                    (state.cartList[productFinder].number != 1 ?
                        state.cartList[productFinder].number-- :
                        state.cartList = state.cartList.filter(item => item.productId === action.payload.productId))
            )
        },
        syncData: (state, action) => {
            const productFinder: number = state.cartList.findIndex(item => item.productId == action.payload.productId)

            if (productFinder >= 0) {
                state.cartList[productFinder].price = action.payload.price
                state.cartList[productFinder].offPercent = action.payload.offPercent
                state.cartList[productFinder].productName = action.payload.productName
                state.cartList[productFinder].productTitleFA = action.payload.productTitleFA
                state.cartList[productFinder].mainImg = action.payload.mainImg
            }
        },
        removeAll : (state)=>{
            state.cartList = state.cartList.filter(item => item.productId == `cleared ${Math.random()}`)
        }

    }
})

export const {add, remove, editNumber, syncData, removeAll} = cartReducer.actions
export default cartReducer.reducer