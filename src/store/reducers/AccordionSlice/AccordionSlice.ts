import { createSlice } from '@reduxjs/toolkit';

export const accordionSlice = createSlice({
	name: 'accordion',
	initialState: { isOpen: false, maxHeight: '0px' },
	reducers: {
		ToggleAccordion(state) {
			state.isOpen = !state.isOpen;
		},
		SetMaxHeight(state, action) {
			state.maxHeight = state.isOpen === true ? action.payload : '0px';
		},
	},
});
export const { ToggleAccordion, SetMaxHeight } = accordionSlice.actions;
export default accordionSlice.reducer;
