import { createSlice } from "@reduxjs/toolkit";

const cssSlice = createSlice({
    name:'css',
    initialState:{

        px:0,
    },
    reducers:{

       topLength:(state,action)=>{
state.px=action.payload

       }
    }

})

export const {} = cssSlice.actions;
export default cssSlice.reducer;