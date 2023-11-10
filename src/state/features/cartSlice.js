import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addItemToUserCart, addQuantityToCartItem, fetchCart, removeItemFromUserCart, subtractQuantityFromCartItem } from '../../utils/cart';

const initialState = {
    _id: '',
    user_id: '',
    items: [],
    total: 0,
    shippingCost: 0,
    quantity: 0,
    loading: false,
    error: false
};

export const fetchUserCart = createAsyncThunk('fetchCart', fetchCart);
export const addToUserCart = createAsyncThunk('addItemToCart', addItemToUserCart);
export const removeFromUserCart = createAsyncThunk('removeItemFromCart', removeItemFromUserCart);
export const addQuantityToUserCartItem = createAsyncThunk('addQuantityToCartItem', addQuantityToCartItem);
export const subtractQuantityFromUserCartItem = createAsyncThunk('subractQuantityFromCartItem', subtractQuantityFromCartItem);

const cartSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const item = state.items.find(item => action.payload.item.card_id === item.card_id)
            if (item) return state;
            state.items = [...state.items, action.payload.item];
            state.quantity = state.items.length
        },
        removeItemFromCart: (state, action) => {
            state.items = state.items.filter(item => item.card_id !== action.payload.card_id);
            state.quantity = state.items.length
        },
        addQuantityToItem: (state, action) => { 
            const cardItem = state.items.find(item => action.payload.card_id === item.card_id);
            if (!cardItem) return state;
            cardItem.quantity += action.payload.amount;
            state.items = state.items.map(item => item.card_id === action.payload.card_id ? cardItem : item);
        },
        subtractQuantityFromItem: (state, action) => {
            const cardItem = state.items.find(item => action.payload.card_id === item.card_id);
            const quantityLessThanZero = cardItem.quantity - action.payload.amount <= 0;
            if (!cardItem || quantityLessThanZero) return state;
            cardItem.quantity -= action.payload.amount;
            state.items = state.items.map(item => item.card_id === action.payload.card_id ? cardItem : item);
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUserCart.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchUserCart.fulfilled, (state, action) => {
                const newCart = action.payload;
                newCart.loading = false;
                newCart.error = false;
                return newCart;
            }).addCase(fetchUserCart.rejected, (state) => {
                state.error = true;
                state.loading = false;
            })
            .addCase(addToUserCart.pending, (state) => {
                state.loading = true;
            })
            .addCase(addToUserCart.fulfilled, (state, action) => { 
                const { item, quantity, total, shippingCost } = action.payload;
                if (state.items.some(card => card.card_id === item.card_id)) return state;
                state.items = [...state.items, item];
                state.quantity = quantity;
                state.total = total;
                state.shippingCost = shippingCost;
                state.loading = false;
            })
            .addCase(addToUserCart.rejected, (state, action) => {
                const { card_id } = action.payload;
                state.items = state.items.filter(item => item.card_id !== card_id);
                state.quantity = state.items.length;
                state.loading = false;
            })
            .addCase(removeFromUserCart.pending, (state) => {
                state.loading = true;
            })
            .addCase(removeFromUserCart.fulfilled, (state, action) => { 
                const { card_id, quantity, total, shippingCost } = action.payload;
                state.items = state.items.filter(item => item.card_id !== card_id);
                state.quantity = quantity;
                state.total = total;
                state.shippingCost = shippingCost;
                state.loading = false;
            })
            .addCase(removeFromUserCart.rejected, (state, action) => {
                const item = action.payload;
                state.items = [...state.items, item];
                state.quantity = state.items.length;
                state.loading = false;
            })
            .addCase(addQuantityToUserCartItem.pending, (state) => {
                state.loading = true;
            })
            .addCase(addQuantityToUserCartItem.fulfilled, (state, action) => { 
                const { card_id, quantity, total } = action.payload;
                state.items = state.items.map(item => item.card_id == card_id ? { ...item, quantity } : item);
                state.total = total;
                state.loading = false;
            })
            .addCase(addQuantityToUserCartItem.rejected, (state, action) => {
                const { card_id, quantity } = action.payload;
                state.items = state.items.map(item => item.card_id == card_id ? { ...item, quantity } : item);
                state.loading = false;
            })
            .addCase(subtractQuantityFromUserCartItem.pending, (state) => {
                state.loading = true;
            })
            .addCase(subtractQuantityFromUserCartItem.fulfilled, (state, action) => { 
                const { card_id, quantity, total } = action.payload;
                state.items = state.items.map(item => item.card_id == card_id ? { ...item, quantity } : item);
                state.total = total;
                state.loading = false;
            })
            .addCase(subtractQuantityFromUserCartItem.rejected, (state, action) => {
                const card = action.payload;
                state.items = state.items.map(item => item.card_id == card.card_id ? card : item);
                state.loading = false;
            })
    }
});

export const { addItemToCart, removeItemFromCart, addQuantityToItem, subtractQuantityFromItem } = cartSlice.actions;

export default cartSlice.reducer;
