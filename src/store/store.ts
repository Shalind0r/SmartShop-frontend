import { configureStore, combineReducers } from '@reduxjs/toolkit';
import HeaderReducer from 'store/reducers/HeaderSlice/HeaderSlice';
import sliderReducer from './reducers/SliderSlice/SliderSlice';
import modelsReducer from 'store/reducers/ModelsSlice/ModelsSlice';
import { Api } from './services/apiService';
const rootReducer = combineReducers({
	HeaderReducer,
	sliderReducer,
	modelsReducer,
	[Api.reducerPath]: Api.reducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(Api.middleware),
	});
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type appDispatch = AppStore['dispatch'];

export default setupStore();
