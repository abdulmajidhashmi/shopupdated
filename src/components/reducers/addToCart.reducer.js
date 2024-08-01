// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//  value:{},
//  total:0,
//  loginobj:null,
 
// };

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
   
//     increaseCart: (state, action) => {

     
//       const { proid } = action.payload;
  
//       // Fetch the current counter value
//       const currentCounter = state.value[proid] || 0;
    
//       // Update the counter by incrementing it by 1
//       state.value[proid] = currentCounter + 1;
//     },
//     decreaseCart: (state, action) => {

//       const { proid } = action.payload;
//       const currentCounter = state.value[proid] ;
//       if(currentCounter>0){
//       state.value[proid] = currentCounter -1;
//       }

//     },
  

//     calculatetotal:(state,action)=>{

// state.total=action.payload;
//     },
//     removecart:(state,action)=>{
//       const {proid}=action.payload;
      
//       state.value[proid]=0;

//     },
//     loginobject:(state,action)=>{
// state.loginobj=action.payload;
//     },
    
//   },

  
// })

// // Action creators are generated for each case reducer function
// export const { increaseCart, decreaseCart,calculatetotal,removecart ,loginobject} = cartSlice.actions

// export default cartSlice.reducer;



// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   value: {}, // Initialize as an object
//   total: 0,
//   loginobj: null,
// };

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     increaseCart: (state, action) => {
//       const { proid } = action.payload;
//       const currentCounter = state.value[proid] || 0;
//       state.value[proid] = currentCounter + 1;
//     },
//     decreaseCart: (state, action) => {
//       const { proid } = action.payload;
//       const currentCounter = state.value[proid];
//       if (currentCounter > 0) {
//         state.value[proid] = currentCounter - 1;
//       }
//     },
//     calculatetotal: (state, action) => {
//       state.total = action.payload;
//     },
//     removecart: (state, action) => {
//       const { proid } = action.payload;
//       state.value[proid] = 0;
//     },
//     loginobject: (state, action) => {
//       state.loginobj = action.payload;
//     },
//   },
// });

// export const { increaseCart, decreaseCart, calculatetotal, removecart, loginobject } = cartSlice.actions;

// export default cartSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {}, // initial state for cart items
  total: 0,
  loginobj: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseCart: (state, action) => {
      const { proid } = action.payload;
      const currentCounter = state.value[proid] || 0;
      state.value[proid] = currentCounter + 1;
    },
    decreaseCart: (state, action) => {
      const { proid } = action.payload;
      const currentCounter = state.value[proid];
      if (currentCounter > 0) {
        state.value[proid] = currentCounter - 1;
      }
    },
    calculatetotal: (state, action) => {
      state.total = action.payload;
    },
    removecart: (state, action) => {
      const { proid } = action.payload;
      state.value[proid] = 0;
    },
    loginobject: (state, action) => {
      state.loginobj = action.payload;
    },
    deletecart:(state,action) =>{

      state.value ={};
      state.total=0;
    },
  },
});

export const { increaseCart, decreaseCart, calculatetotal, removecart, loginobject,deletecart } = cartSlice.actions;
export default cartSlice.reducer;
