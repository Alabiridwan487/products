import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './slices/CartSlices'

const store = configureStore(
    {
        reducer: {
            cart: cartSlice
        }
    }
)

export default store;