import { configureStore } from '@reduxjs/toolkit'
import addToCartReducer from '../reducers/addToCart.reducer'
import userReducer from '../reducers/user.reducer'
import orderReducer from '../reducers/order.reducer'
import checkoutReducer from '../reducers/checkout.reducer'
import cssReducer from '../reducers/css.reducer';

export default configureStore({
  reducer: {

    cart:addToCartReducer,
    user:userReducer,
    order:orderReducer,
    checkout: checkoutReducer,
    css:cssReducer,
    
  },
})