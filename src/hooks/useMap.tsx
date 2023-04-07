import React, { useId } from 'react';

interface setComponent {
	data: {}[];
	component: React.ComponentType<any>;
	wrapper?: React.ComponentType<any>;
	componentClassName?: string;
	wrapperClassName?: string;
}

export const useMap = ({
	data,
	wrapper: Wrapper,
	wrapperClassName,
	component: Component,
	componentClassName,
}: setComponent) => {
	if (Wrapper) {
		return data.map((item, index) => (
			<Wrapper className={wrapperClassName} key={useId()}>
				<Component className={componentClassName} {...item} />
			</Wrapper>
		));
	} else {
		return data.map((item) => (
			<Component className={componentClassName} key={useId()} {...item} />
		));
	}
};
