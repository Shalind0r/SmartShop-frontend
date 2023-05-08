import React, { MutableRefObject, useEffect, useRef } from 'react';
import HeaderTop from 'entities/HeaderTop/HeaderTop';
import classes from './Header.module.css';

import { useAppDispatch } from 'store/hooks/redux';
import { setHeaderHeight } from 'store/reducers/HeaderSlice/HeaderSlice';
import HeaderBottom from 'entities/HeaderBottom/HeaderBottom';

const Header: React.FC<{ className?: string }> = ({ className }) => {
	const headerRef = useRef<HTMLDivElement | null>(null);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (headerRef.current) {
			dispatch(setHeaderHeight(headerRef.current.offsetHeight));
		}
	}, []);
	return (
		<header ref={headerRef} className={`${className} ${classes.header}`}>
			<HeaderTop />
			<HeaderBottom />
		</header>
	);
};

export default Header;
