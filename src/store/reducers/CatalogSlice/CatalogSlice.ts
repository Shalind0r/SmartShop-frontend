import { createSlice } from '@reduxjs/toolkit';

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState: { isOpen: false },
	reducers: {
		OpenCatalog(state) {
			state.isOpen = true;
		},
		CloseCatalog(state) {
			state.isOpen = false;
		},
	},
});
export const { OpenCatalog, CloseCatalog } = catalogSlice.actions;
export default catalogSlice.reducer;
