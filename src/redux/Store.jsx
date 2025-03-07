import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './slices/CartSlices'
import authSlice from './slices/auth'

const store = configureStore(
    {
        reducer: {
            auth: authSlice,
            cart: cartSlice
        }
    }
)

export default store;
