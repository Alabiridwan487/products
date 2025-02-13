import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: { cartItem: [], cartCount: 0 },
    reducers: {
        addToCart: (state, action) => {
            state.cartItem.push(action.payload);
            state.cartCount += 1;
        },
        removeFromCart: (state, action) => {
            const itemIndex = state.cartItem.findIndex(item => item.id === action.payload);
            
            if (itemIndex !== -1) {
                state.cartItem.splice(itemIndex, 1);
                state.cartCount = Math.max(0, state.cartCount - 1);
            }
        },
    },
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;