import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: { cartItem: [], cartCount: 0 },
    reducers: {
        addToCart: (state, action) => {
            state.cartItem.push(action.payload);
            state.cartCount += 1;
        },
        clearCart: (state, action) => {
            console.log("clicked.....")
            state.cartItem = [];
            state.cartCount = 0;
        }
    }
})

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;