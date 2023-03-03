import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	&:root {
		--color-white: #fff;
		--color-default: #222222;
		--color-primary: rgb(21,114,123);
		--color-secondary: rgba(19,89,83,0.85);
		--color-warning: orange;
		--color-grey: #6f6f6f6

		--bg-white: #f3f5fa;
	}
	.active {
		color: var(--color-warning);
	}
	section {
		padding: 60px 0;
		overflow: hidden;
	}
	.section-bg {
		background-color: var(--bg-white);
	}
	.section-title {
		padding-bottom: 30px;
		text-align: center;
		
		span {
			font-size: 25px;
			font-weight: 700;
			color: var(--color-default);
			margin-bottom: 5px;
		}

		h2 {
			line-height: 55px;
			font-weight: 600;
			margin-bottom: 15px;
			font-size: 32px;
			font-weight: bold;
			text-transform: uppercase;
			margin-bottom: 20px;
			padding-bottom: 20px;
			position: relative;
			color: var(--color-primary);

			&::before {
				content: "";
				position: absolute;
				display: block;
				width: 120px;
				height: 1px;
				background: #ddd;
				bottom: 1px;
				left: calc(50% - 60px);
			}
			&::after {
				content: "";
				position: absolute;
				display: block;
				width: 40px;
				height: 3px;
				background: rgba(19, 89, 83, 0.85);
				bottom: 0;
				left: calc(50% - 20px);
			}
		}
		p {
			font-size: 18px;
			color: var(--color-grey);
			margin-bottom: 0;
			font-size: 18px;
		}
	}
	@media (max-width: 767px) {
		.section-title {
			span {
				font-size: 20px;
			}
			h2 {
				line-height: 41px;
			}
		}
	}
`;

export default GlobalStyle;
