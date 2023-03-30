import React from 'react';
import classes from './ShopLogo.module.css';
import { ReactComponent as SmartShopLogo } from 'icons/smartshop.svg';
import { NavLink } from 'react-router-dom';
import { MainRoute } from 'app/routes_path';

const ShopLogo: React.FC<{ type?: string }> = ({ type }) => {
	return (
		<NavLink className={classes.shopLogo} to={MainRoute}>
			<div className={classes.logo}>
				<SmartShopLogo
					className={type === 'advances' ? classes.logo__icon : ''}
				/>
				<div
					className={
						type === 'advances'
							? `${classes.advancesLogo__text} ${classes.logo__text}`
							: `${classes.defaultLogo__text} ${classes.logo__text}`
					}
				>
					<p className='typography--h3'>
						SMATRSHOP<span>.COM</span>
					</p>
					<p className='typography--small'>ONLINE MARKETING COMPANY</p>
				</div>
			</div>
		</NavLink>
	);
};

export default ShopLogo;
