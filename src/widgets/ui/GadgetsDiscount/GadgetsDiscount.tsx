import React from 'react';
import classes from './GadgetsDiscount.module.css';
import GadgetCard from 'entities/ui/Cards/GadgetCard/GadgetCard';
import electricTransport from 'shared/static/images/GadgetDiscount/electroTransport.svg';
import vr from 'shared/static/images/GadgetDiscount/vr.svg';
import tablet from 'shared/static/images/GadgetDiscount/planshet.svg';
import electricScooter from 'shared/static/images/GadgetDiscount/electroScooter.svg';
import monitors from 'shared/static/images/GadgetDiscount/monitors.svg';
import ipad from 'shared/static/images/GadgetDiscount/ipad.svg';
const GadgetsDiscount: React.FC = () => {
	return (
		<div className={classes.gadgetDiscount}>
			<div className={`${classes.wrapper} container`}>
				<h3 className={'typography--h3'}>Знижки на гаджеты</h3>
				<div className={classes.wrapper__item}>
					<GadgetCard
						src={electricTransport}
						alt={'зображення Електротранспорта'}
						type={'small'}
						href={'#'}
						title={'Електротранспорт'}
					/>
					<GadgetCard
						src={vr}
						alt={'зображення VR Гаджетів'}
						type={'small'}
						href={'#'}
						title={'VR Гаджети'}
					/>
					<GadgetCard
						src={tablet}
						alt={'зображення Планшетів'}
						type={'small'}
						href={'#'}
						title={'Планшети'}
					/>
					<GadgetCard
						src={electricScooter}
						alt={'зображення Електросамоката'}
						type={'small'}
						href={'#'}
						title={'Електросамокати'}
					/>
				</div>
				<div className={classes.wrapper__item}>
					<GadgetCard
						src={ipad}
						alt={'зображення iPad Pro'}
						type={'wide'}
						href={'#'}
						title={'iPad Pro'}
					/>
					<GadgetCard
						src={monitors}
						alt={'зображення Моніторів'}
						type={'wide'}
						href={'#'}
						title={'Монітори'}
					/>
				</div>
			</div>
		</div>
	);
};

export default GadgetsDiscount;
