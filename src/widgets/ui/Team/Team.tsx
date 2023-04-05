import React from 'react';
import TeamCard from 'entities/ui/Cards/TeamCard/TeamCard';
import classes from './Team.module.css';
//images
import ivan from 'shared/static/images/About/team/ivan.png';
import petro from 'shared/static/images/About/team/petro.png';
import dmytro from 'shared/static/images/About/team/dmytro.png';
import adam from 'shared/static/images/About/team/adam.png';
import mark from 'shared/static/images/About/team/mark.png';
import ivan2 from 'shared/static/images/About/team/ivan2.png';
import background from 'shared/static/images/About/team/background.png';
const Team = () => {
	return (
		<div className={classes.team}>
			<img src={background} alt={'background'} />
			<h3 className={'typography--h3'}>
				Наша Команда українські IT-компанії можуть наздогнати Apple в
				частині інновацій, але вони так само нескінченно близькі в тому,
				що стосується досвіду користувача.
			</h3>
			<div className={classes.wrapper}>
				<div>
					<TeamCard
						firstName={'Іван'}
						lastName={'Купертінов'}
						job={'IT Expert'}
						src={ivan}
					/>
					<TeamCard
						firstName={'Петро'}
						lastName={'Купертінов'}
						job={'Marketing Manager'}
						src={petro}
					/>
					<TeamCard
						firstName={'Дмитро'}
						lastName={'Купертінов'}
						job={'IT Expert'}
						src={dmytro}
					/>
				</div>
				<div>
					<TeamCard
						firstName={'Адам'}
						lastName={'Купертінов'}
						job={'Project Manager'}
						src={adam}
					/>
					<TeamCard
						firstName={'Марк'}
						lastName={'Купертінов'}
						job={'Project Manager'}
						src={mark}
					/>
					<TeamCard
						firstName={'Іван'}
						lastName={'Купертінов'}
						job={'IT Expert'}
						src={ivan2}
					/>
				</div>
			</div>
		</div>
	);
};

export default Team;
