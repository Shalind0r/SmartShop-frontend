import React from 'react';
import HeaderBottom from 'entities/ui/HeaderBottom/HeaderBottom';
import HeaderTop from 'entities/ui/HeaderTop/HeaderTop';
import { useAppSelector } from 'store/hooks/redux';
import classes from './Header.module.css';
import Catalog from 'widgets/ui/Catalog/Catalog';

const Header: React.FC<{ className?: string }> = ({ className }) => {
	const { isOpen } = useAppSelector((state) => state.catalogReducer);
	return (
		<header
			className={
				isOpen === true
					? `${classes.fixed} ${className}`
					: `${className} ${classes.header}`
			}
		>
			<HeaderTop />
			<HeaderBottom />
			<Catalog />
		</header>
	);
};

export default Header;
