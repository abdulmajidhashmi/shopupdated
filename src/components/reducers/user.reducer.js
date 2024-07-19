import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        user:null,
        token:''
    },
    reducers:{

        userdata:(state,action)=>{
            state.user=action.payload;
        },

            setToken:(state,action)=>{

                state.token=action.payload;
            }
    }

})

export const {userdata,setToken} = userSlice.actions;
export default userSlice.reducer;