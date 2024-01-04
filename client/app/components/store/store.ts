import { configureStore } from '@reduxjs/toolkit';
import { autorization, exit_profile } from './slice';

export const store = configureStore({
	reducer: {autorization, exit_profile}
})