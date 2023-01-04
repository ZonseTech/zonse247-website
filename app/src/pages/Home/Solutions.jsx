import React from 'react';
import { useParams } from 'react-router-dom';

export default function Solutions() {
	const params = useParams();

	return <div>{params.solution}</div>;
}
