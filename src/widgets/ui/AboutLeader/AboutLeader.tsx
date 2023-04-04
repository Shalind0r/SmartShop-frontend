import React from 'react';
import classes from './AboutLeader.module.css';
import AdvancesItem from 'entities/ui/AdvancesItem/AdvancesItem';
import { ReactComponent as HomeIcon } from 'icons/Advances1/home.svg';
import { ReactComponent as DollarIcon } from 'icons/Advances1/dollar.svg';
import { ReactComponent as LikeIcon } from 'icons/Advances1/like.svg';
import { ReactComponent as SpeakerIcon } from 'icons/Advances1/speaker.svg';
import { ReactComponent as BagIcon } from 'icons/Advances1/bag.svg';

const AboutLeader: React.FC = () => {
	return (
		<div className={classes.leader}>
			<div className={classes.wrapper}>
				<h2 className={'typography--extra-large'}>
					Smartshop.com - лідери в сервісі продажів та послуг Apple
					Premium
				</h2>
				<div className={classes.advances}>
					<AdvancesItem
						icon={<HomeIcon />}
						title={'10,000+ big cities'}
						content={'Buildings Constructed'}
					/>
					<AdvancesItem
						icon={<DollarIcon />}
						title={'2 Million dividents'}
						content={'Buildings Constructed'}
					/>
					<AdvancesItem
						icon={<LikeIcon />}
						title={'2 Million dividents'}
						content={'Buildings Constructed'}
					/>
					<AdvancesItem
						icon={<SpeakerIcon />}
						title={'500+ bigclients'}
						content={'Buildings Constructed'}
					/>
					<AdvancesItem
						icon={<BagIcon />}
						title={'500+ insuranse'}
						content={'Buildings Constructed'}
					/>
					<AdvancesItem
						icon={<DollarIcon />}
						title={'10,000+ big cities'}
						content={'Buildings Constructed'}
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutLeader;
