import {createSlice} from "@reduxjs/toolkit";

const init = {
    isLogin : false,
    userId: '',
    tokenId: '',
    fullName: '',
    phoneNumber: ''
}

const userAuthReducer = createSlice({
    name : 'userAuthReducer',
    initialState : init,
    reducers :{
        login : (state,action)=>{
            state.isLogin = true
            action.payload.userId ? state.userId = action.payload.userId : state.userId = state.userId
            action.payload.fullName ? state.fullName = action.payload.fullName : state.fullName = state.fullName
            action.payload.phoneNumber ? state.phoneNumber = action.payload.phoneNumber : state.phoneNumber = state.phoneNumber
            action.payload.tokenId ? state.tokenId = action.payload.tokenId : state.tokenId = state.tokenId
        },
        logout : (state)=>{
            state.isLogin = false
            state.userId = ''
            state.fullName = ''
            state.phoneNumber = ''
            state.tokenId = ''
        }
    }
})

export const {login,logout} = userAuthReducer.actions
export default userAuthReducer.reducer