import React from 'react';

import styled, { css } from 'styled-components';
import Button from 'react-bootstrap/Button';
import { scrollToTop } from '../../utils/scroll';
import { FaArrowUp } from 'react-icons/fa';

const ShowToTopButton = css`
		visibility: visible;
		opacity: 1;
	`,
	BacktoTopButton = styled(Button)`
		position: fixed;
		opacity: 0;
		right: 15px;
		bottom: 15px;
		z-index: 996;
		background: rgba(19, 89, 83, 0.85);
		width: 44px;
		height: 44px;
		border-radius: 50px;
		transition: all 0.4s;

		${(props) => props.visible && ShowToTopButton};

		svg {
			font-size: 28px;
			color: #fff;
			line-height: 0;
		}

		&:hover {
			background: rgb(21, 114, 128);
			color: #fff;
		}
	`;

export default function BackToTop(props) {
	return (
		<BacktoTopButton
			visible={props.visible}
			variant='success'
			className='d-flex align-items-center justify-content-center'
			onClick={scrollToTop}>
			<FaArrowUp />
		</BacktoTopButton>
	);
}
