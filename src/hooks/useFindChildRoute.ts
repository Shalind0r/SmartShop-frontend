import { useLocation } from 'react-router-dom';

export const useFindChildRoute = (Parent: string) => {
	const location = useLocation();
	const routeRegex = new RegExp(`^${Parent}/.+`);
	return routeRegex.test(location.pathname);
};
