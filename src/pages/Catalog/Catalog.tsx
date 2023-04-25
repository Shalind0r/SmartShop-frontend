import React, { useEffect, useRef } from 'react';
import classes from './Catalog.module.css';
import CatalogMenu from 'entities/CatalogMenu/CatalogMenu';
import { useFetchCategoriesQuery } from 'store/services/apiService';
import { useNavigate, Navigate, useLocation, Outlet } from 'react-router-dom';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import { ErrorRoute } from 'app/routes_path';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { useAppSelector } from 'store/hooks/redux';

const Catalog: React.FC = () => {
	const { data, error } = useFetchCategoriesQuery();
	const navigate = useNavigate();
	const nodeRef = useRef(null);
	const location = useLocation();
	useEffect(() => {
		data &&
			navigate(
				`${CyrillicToTranslit({ preset: 'uk' }).transform(
					data[0].name,
				)}/1`,
				{ replace: true },
			);
	}, [data]);
	if (error) {
		return <Navigate to={ErrorRoute} />;
	}
	const { height } = useAppSelector((state) => state.HeaderReducer);
	const maxHeight = { height: `calc(100vh - ${height})` };
	return (
		<div className={classes.catalog}>
			<div className={`${classes.wrapper} `}>
				<div className={`${classes.container} container`}>
					<CatalogMenu height={maxHeight} data={data} />
					<div style={maxHeight} className={classes.categories}>
						<SwitchTransition>
							<CSSTransition
								appear={true}
								component={false}
								location={location}
								key={location.pathname}
								nodeRef={nodeRef}
								timeout={500}
								classNames={{
									enter: classes.fadeEnter,
									enterActive: classes.fadeEnterActive,
									exit: classes.fadeExit,
									exitActive: classes.fadeExitActive,
								}}
								unmountOnExit
							>
								{(state) => (
									<div ref={nodeRef}>
										<Outlet />
									</div>
								)}
							</CSSTransition>
						</SwitchTransition>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Catalog;
