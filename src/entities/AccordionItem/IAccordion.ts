import { ReactNode } from 'react';

export interface IAccordion {
	title: string;
	content?: string;
	children?: ReactNode;
}
