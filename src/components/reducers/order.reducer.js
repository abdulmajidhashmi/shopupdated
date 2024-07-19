import { createSlice } from "@reduxjs/toolkit";

const orderslice = createSlice({
  name: "order",
  initialState: {
    order: {},
    orderuserdetails: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      cash: 'cash on delivery'
    }
  },
  reducers: {
    orderdata: (state, action) => {
      state.order = action.payload.order;
      state.orderuserdetails = action.payload.orderuserdetails;
    }
  }
});

export const { orderdata } = orderslice.actions;
export default orderslice.reducer;
