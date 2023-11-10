import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import userReducer from './features/userSlice';
import categoryReducer from './features/categorySlice';
import cartReducer from './features/cartSlice';
import { cardStoreApi } from './api';

export const store = configureStore({
  reducer: {
    [cardStoreApi.reducerPath]: cardStoreApi.reducer,
    user: userReducer,
    categories: categoryReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardStoreApi.middleware )
});
