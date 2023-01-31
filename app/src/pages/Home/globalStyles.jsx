import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	:root {
		--color-default: #222222;
		--color-primary: #008374;
		--color-secondary: #f85a40;
	}

	.active {
		color: orange;
	}

	section {
		padding: 60px 0;
		overflow: hidden;
	}

	.section-bg {
		background-color: #f3f5fa;
	}

	.section-title {
		text-align: center;
		padding-bottom: 30px;

		h2 {
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
			color: #6f6f6f;
			margin-bottom: 0;
			font-size: 18px;
		}
	}



`;

export default GlobalStyle;
