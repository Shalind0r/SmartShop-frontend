import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
	subCategoryId: string;
	filter: {
		models: string[];
		specifications: string[];
	};
	minPrice: string;
	maxPrice: string;
}
interface IFilterPayload {
	array: keyof typeof initialState.filter;
	value: string;
}
const initialState: IState = {
	subCategoryId: '',
	filter: { models: [], specifications: [] },
	minPrice: '',
	maxPrice: '',
};

export const ProductsSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {
		setSubCategoryId(state, action) {
			state.subCategoryId = action.payload;
		},
		setFilter: (state, action: PayloadAction<IFilterPayload>) => {
			const { array, value } = action.payload;
			state.filter[array] = state.filter[array].concat(value);
		},
		deleteOneFilter: (state, action: PayloadAction<IFilterPayload>) => {
			const { array, value } = action.payload;
			state.filter[array] = state.filter[array].filter((item) => item !== value);
		},
		clearFilter(state) {
			state.filter = { models: [], specifications: [] };
		},
		setMinPrice(state, action) {
			state.minPrice = `&minPrice=${action.payload}`;
		},
		setMaxPrice(state, action) {
			state.maxPrice = `&maxPrice=${action.payload}`;
		},
	},
});
export const {
	setSubCategoryId,
	setFilter,
	deleteOneFilter,
	clearFilter,
	setMinPrice,
	setMaxPrice,
} = ProductsSlice.actions;
export default ProductsSlice.reducer;
