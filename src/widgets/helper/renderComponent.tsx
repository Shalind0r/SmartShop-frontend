import React from 'react';
import uuid from 'react-uuid';

interface setComponent {
	data: any[];
	component: React.ComponentType<any>;
}

export const renderComponent = ({ data, component: Component }: setComponent) => {
	return data.map((item) => <Component key={uuid()} {...item} />);
};
