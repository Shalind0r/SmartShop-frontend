import React from 'react';
import ShopLogo from 'shared/ui/logo/ShopLogo/ShopLogo';
import classes from './Advances.module.css';
import LinkWithArrow from 'shared/ui/links/LinkWithArrow/LinkWithArrow';
import AdvancesItem from 'entities/ui/AdvancesItem/AdvancesItem';
import { ReactComponent as HomeIcon } from 'icons/Advances1/home.svg';
import { ReactComponent as DollarIcon } from 'icons/Advances1/dollar.svg';
import { ReactComponent as LikeIcon } from 'icons/Advances1/like.svg';
import { ReactComponent as SpeakerIcon } from 'icons/Advances1/speaker.svg';
import { ReactComponent as BagIcon } from 'icons/Advances1/bag.svg';

const AdvancesFirst: React.FC<{ className?: string }> = ({ className }) => {
	return (
		<div className={`${classes.advances} ${className}`}>
			<div className={classes.wrapper}>
				<div className={classes.leftSide}>
					<ShopLogo type={'advances'} />
					<h3 className={'typography--h3'}>
						Наші 8 років досягнень, позначені цифрами
					</h3>
					<LinkWithArrow content={'Детальніше про Компанію'} href={'#'} />
				</div>
				<div className={classes.rightSide}>
					<AdvancesItem
						title={'10,000+'}
						content={'Buildings Constructed'}
						icon={<HomeIcon />}
					/>
					<AdvancesItem
						title={'2 Million'}
						content={'Buildings Constructed'}
						icon={<DollarIcon />}
					/>
					<AdvancesItem
						title={'2 Million'}
						content={'Buildings Constructed'}
						icon={<LikeIcon />}
					/>
					<AdvancesItem
						title={'500+'}
						content={'Buildings Constructed'}
						icon={<SpeakerIcon />}
					/>
					<AdvancesItem
						title={'500+'}
						content={'Buildings Constructed'}
						icon={<BagIcon />}
					/>
				</div>
			</div>
		</div>
	);
};

export default AdvancesFirst;
