import React from "react";
import styled from "styled-components";
import { lighten } from "polished";
import { darkGrey } from "../utilities";

const StyledCloseButton = styled.button`
	background-color: white;
	border: 0;
	display: grid;
	justify-content: center;
	align-content: center;
	cursor: pointer;
	outline: 0;
	height: 3rem;
	path {
		fill: ${lighten(0.5, darkGrey)};
		transition: fill 0.2s ease;
	}
	&:hover {
		path {
			fill: ${darkGrey};
		}
	}
`;

const CloseButton = ({ onClick }) => (
	<StyledCloseButton onClick={onClick}>
		<svg
			width="24"
			height="24"
			xmlns="http://www.w3.org/2000/svg"
			fillRule="evenodd"
			clipRule="evenodd"
		>
			<path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" />
		</svg>
	</StyledCloseButton>
);

export default CloseButton;
