import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFindChildRoute } from 'hooks/useFindChildRoute';
import { CatalogRoute } from 'app/routes_path';
import HeaderBottom from 'entities/HeaderBottom/HeaderBottom';

const HeaderBottomHoc = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const style = { opacity: 0 };
	const isChildOfCatalogRoute = useFindChildRoute(CatalogRoute);
	const [visitedRoutes, setVisitedRoutes] = useState([location.pathname]);
	const routeAndChild =
		location.pathname === CatalogRoute || isChildOfCatalogRoute;

	const closeCatalog = () => {
		const lastVisitedRoute = visitedRoutes[visitedRoutes.length - 2];
		navigate(lastVisitedRoute);
		setVisitedRoutes((prevState) => prevState.slice(0, -1));
	};

	useEffect(() => {
		if (location.pathname === CatalogRoute) {
			// Если мы переходим на CatalogRoute, то добавляем его в массив посещенных роутов
			setVisitedRoutes((prevState) => [...prevState, CatalogRoute]);
		} else {
			// Если мы переходим на другой дочерний роут, то заменяем последний элемент в массиве на текущий роут
			setVisitedRoutes((prevState) => {
				const lastIndex = prevState.length - 1;
				const newVisitedRoutes = [...prevState];
				newVisitedRoutes[lastIndex] = location.pathname;
				return newVisitedRoutes;
			});
		}
	}, [location.pathname]);
	const headerBottomProps = {
		visitedRoutes,
		setVisitedRoutes,
		isChildOfCatalogRoute,
		routeAndChild,
		closeCatalog,
		style,
	};
	return <HeaderBottom {...headerBottomProps} />;
};

export default HeaderBottomHoc;
