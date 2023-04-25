import React, { MutableRefObject, useEffect, useRef } from 'react';
import HeaderTop from 'entities/HeaderTop/HeaderTop';
import classes from './Header.module.css';
import HeaderBottomHOC from 'entities/HeaderBottom/HeaderBottomHOC';
import { useAppDispatch } from 'store/hooks/redux';
import { setHeaderHeight } from 'store/reducers/HeaderSlice/HeaderSlice';

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
			<HeaderBottomHOC />
		</header>
	);
};

export default Header;
