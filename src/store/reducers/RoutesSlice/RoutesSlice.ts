import { createSlice } from '@reduxjs/toolkit';

export const RoutesSlice = createSlice({
	name: 'routes',
	initialState: {
		path: '',
		category: '',
		categoryGroup: '',
		subCategory: '',
		hiddenPath: '',
		previousPath: '',
	},
	reducers: {
		updatePath(state, action) {
			state.category = action.payload[0];
			state.categoryGroup = action.payload[1];
			state.subCategory = action.payload[2];
			state.path = `/${encodeURI(action.payload.join('/'))}`;
		},
		setHiddenPath(state, action) {
			state.hiddenPath = encodeURI(action.payload);
		},
		setPreviousPath(state, action) {
			state.previousPath = action.payload;
		},
	},
});

export const { updatePath, setHiddenPath, setPreviousPath } = RoutesSlice.actions;
export default RoutesSlice.reducer;
