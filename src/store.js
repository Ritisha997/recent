import { configureStore } from "@reduxjs/toolkit";
import detailsSlice from './features/details/detailsSlice';

export const store = configureStore({
	reducer: {
		details: detailsSlice,
	},
});