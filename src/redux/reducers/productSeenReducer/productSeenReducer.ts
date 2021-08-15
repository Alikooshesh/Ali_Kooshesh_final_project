import {createSlice} from "@reduxjs/toolkit";

const init:{productList : string[]} = {
    productList : []
}

const productSeenReducer = createSlice({
    name : 'productSeenReducer',
    initialState : init,
    reducers :{
        addSeenItem : (state,action) => {
            const finder = state.productList.findIndex(item => item == action.payload.productID)

            if (finder == -1){
                while (state.productList.length > 5){
                    state.productList.shift()
                }
                state.productList.push(action.payload.productID)
            }
        }
    }
})

export const {addSeenItem} = productSeenReducer.actions
export default productSeenReducer.reducer