import { configureStore, combineReducers } from '@reduxjs/toolkit';
import catalogReducer from './reducers/CatalogSlice/CatalogSlice';

const rootReducer = combineReducers({
	catalogReducer,
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