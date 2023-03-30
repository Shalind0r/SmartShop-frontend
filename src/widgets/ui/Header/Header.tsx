import React from 'react';
import HeaderBottom from 'entities/ui/HeaderBottom/HeaderBottom';
import HeaderTop from 'entities/ui/HeaderTop/HeaderTop';

const Header: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<header className={className}>
			<HeaderTop />
			<HeaderBottom />
		</header>
	);
};

export default Header;
