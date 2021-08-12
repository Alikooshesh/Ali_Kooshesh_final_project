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
            state.userId = action.payload.userId
            state.fullName = action.payload.fullName
            state.phoneNumber = action.payload.phoneNumber
            state.tokenId = action.payload.tokenId
        },
        logout : (state,action)=>{
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