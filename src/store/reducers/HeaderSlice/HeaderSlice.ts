import { createSlice } from '@reduxjs/toolkit';

export const HeaderSlice = createSlice({
	name: 'catalog',
	initialState: { height: '', openCatalog: false },
	reducers: {
		setHeaderHeight(state, action) {
			state.height = `${action.payload}px`;
		},
	},
});
export const { setHeaderHeight } = HeaderSlice.actions;
export default HeaderSlice.reducer;
