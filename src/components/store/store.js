import { configureStore } from '@reduxjs/toolkit';
import characterSlice from './characterSlice';
import itemsSlice from './itemsSlice';

export const store = configureStore({
    reducer: {
        character: characterSlice,
        items: itemsSlice,
    },
})