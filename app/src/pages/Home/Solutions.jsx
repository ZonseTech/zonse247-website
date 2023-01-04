import React from 'react';
import { useParams } from 'react-router-dom';

export default function Solutions() {
	const params = useParams();

	console.log(params);

	return <div>Solutions</div>;
}
