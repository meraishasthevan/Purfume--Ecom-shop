import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addToCart(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            state.totalQuantity++;
        },
        removeFromCart(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.items = state.items.filter(item => item.id !== action.payload);
            }
        },
        updateQuantity(state, action) {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                const previousQuantity = existingItem.quantity;
                existingItem.quantity = action.payload.quantity;
                
                if (existingItem.quantity <= 0) {
                    state.items = state.items.filter(item => item.id !== action.payload.id);
                }
                
                state.totalQuantity += action.payload.quantity - previousQuantity;
            }
        },
        
        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
