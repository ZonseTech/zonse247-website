import React from 'react';
import { useRouteError } from 'react-router-dom';

const E500 = () => {
	const error = useRouteError();

	console.log('====================================');
	console.log(error);
	console.log('====================================');

	return <div>E500</div>;
};

export default E500;
