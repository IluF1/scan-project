import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
		name: 'autorization',
		initialState: {
			autorization:'not'
		},
		reducers: {
			autorization: (state, action) => {
				state.autorization = 'yes'
			},
			exit_profile: (state, action) => {
				state.autorization = 'not'
			}
		}
})

export const { autorization, exit_profile } = cartSlice.actions;

export default cartSlice;