import React from 'react';
import { Oval } from 'react-loader-spinner';
import styled, { css } from 'styled-components';

const Loading = ({ isLoading, message }) => {
	const OverlayContent = styled.div`
		display: flex;
		width: 100%;
		left: 0;
		top: 0;
		align-items: center;
		height: 100%;
		justify-content: center;
		position: fixed;
		z-index: 999999;
		flex-direction: column;

		${(props) =>
			!props.isLoading &&
			css`
				display: none;
			`}
	`;

	const Wrapper = styled(OverlayContent)`
		display: inherit;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	`;

	const Message = styled.span`
		margin-top: 20px;
		color: white;
		font-weight: bold;
		text-shadow: 0 2px 5px black;
	`;

	return isLoading ? (
		<OverlayContent isLoading={isLoading}>
			<Wrapper>
				<Oval
					height={80}
					width={80}
					color='#4fa94d'
					wrapperStyle={{}}
					wrapperClass='wrapper'
					visible={true}
					ariaLabel='oval-loading'
					secondaryColor='#4fa94d'
					strokeWidth={2}
					strokeWidthSecondary={2}
				/>
				<Message>
					<span>{message}</span>
				</Message>
			</Wrapper>
		</OverlayContent>
	) : null;
};

export default Loading;
