import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const sliderSlice = createSlice({
	name: 'catalog',
	initialState: { activeSlide: 0, isLastSlide: false },
	reducers: {
		SetActiveSlide(state, action: PayloadAction<number>) {
			state.activeSlide = action.payload;
		},
		SetIsLastSlide(state, action: PayloadAction<boolean>) {
			state.isLastSlide = action.payload;
		},
	},
});
export const { SetActiveSlide, SetIsLastSlide } = sliderSlice.actions;
export default sliderSlice.reducer;
