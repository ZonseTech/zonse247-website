import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowToTop } from 'react-icons/bi';

import './BackToTop.scss';

export default function BackToTop() {
	return (
		<>
			<Link
				to={'./'}
				className='back-to-top d-flex align-items-center justify-content-center'>
				<BiArrowToTop />
			</Link>
		</>
	);
}
