import { configureStore, combineReducers } from '@reduxjs/toolkit';
import catalogReducer from './reducers/CatalogSlice/CatalogSlice';
import sliderReducer from './reducers/SliderSlice/SliderSlice';

const rootReducer = combineReducers({
	catalogReducer,
	sliderReducer,
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type appDispatch = AppStore['dispatch'];

export default setupStore();
