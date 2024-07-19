import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    personalDetails: {},
    shippingAddress: {},
    paymentMethod: '',
    totalAmount: 0,
};

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        updatePersonalDetails: (state, action) => {
            state.personalDetails = action.payload;
        },
        updateShippingAddress: (state, action) => {
            state.shippingAddress = action.payload;
        },
        updatePaymentMethod: (state, action) => {
            state.paymentMethod = action.payload;
        },
        updateTotalAmount: (state, action) => {
            state.totalAmount = action.payload;
        },
    },
});

export const {
    updatePersonalDetails,
    updateShippingAddress,
    updatePaymentMethod,
    updateTotalAmount,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
