import React, { FC, useRef } from 'react';
import classes from './SelectedFilters.module.css';
import { clearFilter, deleteOneFilter } from 'store/reducers/ProductsSlice/ProductsSlice';
import { useAppDispatch } from 'store/hooks/redux';
import { ReactComponent as CloseIcon } from 'shared/static/images/icons/close.svg';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const SelectedFilters: FC<{
	filter: { models: string[]; specifications: string[] };
}> = ({ filter }) => {
	const dispatch = useAppDispatch();
	return (
		<div className={classes.selected}>
			<div className={classes.selected__title}>
				<h4 className={'typography--h4'}>Обране</h4>
				<p
					onClick={() => dispatch(clearFilter())}
					className={'typography--small'}
				>
					Скинути все
				</p>
			</div>
			<TransitionGroup>
				{filter.models.map((data, index) => (
					<CSSTransition
						key={index}
						timeout={500}
						unmountOnExit={true}
						mountOnEnter={true}
						classNames={{
							enter: classes.itemEnter,
							enterActive: classes.itemEnterActive,
							exit: classes.itemExit,
							exitActive: classes.itemExitActive,
						}}
					>
						<div className={classes.selected__item}>
							<p
								onClick={() =>
									dispatch(
										deleteOneFilter({
											value: data,
											array: 'models',
										}),
									)
								}
								className={'typography--small'}
							>
								{data} <CloseIcon />
							</p>
						</div>
					</CSSTransition>
				))}
			</TransitionGroup>
			<TransitionGroup>
				{filter.specifications.map((data, index) => (
					<CSSTransition
						key={index}
						timeout={500}
						unmountOnExit={true}
						mountOnEnter={true}
						classNames={{
							enter: classes.itemEnter,
							enterActive: classes.itemEnterActive,
							exit: classes.itemExit,
							exitActive: classes.itemExitActive,
						}}
					>
						<div className={classes.selected__item}>
							<p
								onClick={() =>
									dispatch(
										deleteOneFilter({
											value: data,
											array: 'specifications',
										}),
									)
								}
								className={'typography--small'}
							>
								{data} <CloseIcon />
							</p>
						</div>
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	);
};

export default SelectedFilters;
