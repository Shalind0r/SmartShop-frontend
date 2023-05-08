import React, { FC } from 'react';
import classes from './ValidationError.module.css';

const ValidationError: FC<{ error: string }> = ({ error }) => {
	return <p className={`typography--base ${classes.error}`}>{error}</p>;
};

export default ValidationError;
