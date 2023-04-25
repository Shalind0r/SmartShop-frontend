import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IModels } from 'shared/types/ICatalog';

export const fetchModels = createAsyncThunk(
	'models/fetchModels',
	async (id: number) => {
		const response = await fetch(
			`${import.meta.env.VITE_API_BASE_URL}/api/models/${id}`,
		);
		return response.json();
	},
);
export const modelsSlice = createSlice({
	name: 'models',
	initialState: { models: [] as IModels[], status: '', error: '' },
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchModels.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(fetchModels.fulfilled, (state, action) => {
			state.status = 'succeeded';
			state.models = action.payload;
			console.log(state.models);
		});
		builder.addCase(fetchModels.rejected, (state, action) => {
			state.status = 'failed';
			state.error = action.error.message || '';
		});
	},
});

export default modelsSlice.reducer;
