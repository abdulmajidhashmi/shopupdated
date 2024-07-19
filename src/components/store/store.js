import { configureStore } from '@reduxjs/toolkit'
import addToCartReducer from '../reducers/addToCart.reducer'
import userReducer from '../reducers/user.reducer'
import orderReducer from '../reducers/order.reducer'
import checkoutReducer from '../reducers/checkout.reducer'

export default configureStore({
  reducer: {

    addToCart:addToCartReducer,
    user:userReducer,
    order:orderReducer,
    checkout: checkoutReducer,
  },
})