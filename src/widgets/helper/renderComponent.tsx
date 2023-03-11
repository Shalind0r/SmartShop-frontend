import React from 'react';
import uuid from 'react-uuid';

interface setComponent {
	data: any[];
	component: React.ComponentType<any>;
	wrapper?: React.ComponentType<any>;
	componentClassName?: string;
	wrapperClassName?: string;
}

export const renderComponent = ({
	data,
	wrapper: Wrapper,
	wrapperClassName,
	component: Component,
	componentClassName,
}: setComponent) => {
	if (Wrapper) {
		return data.map((item, index) => (
			<Wrapper className={wrapperClassName} key={uuid()}>
				<Component className={componentClassName} {...item} />
			</Wrapper>
		));
	} else {
		return data.map((item) => (
			<Component className={componentClassName} key={uuid()} {...item} />
		));
	}
};
