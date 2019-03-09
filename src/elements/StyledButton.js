import styled from "styled-components";
import { lighten } from "polished";
import { green, darkGrey } from "../utilities";

const StyledButton = styled.button`
	background-color: ${green};
	color: white;
	border-radius: 4px;
	padding: 1rem 2rem;
	font-size: 1.8rem;
	border: 0;
	box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.07);
	cursor: pointer;
	transform: scale(1);
	transition: transform 0.2s ease, background-color 0.2s ease;
	outline: 0;
	&:hover {
		transform: scale(1.1);
		background-color: ${lighten(0.05, green)};
	}
	&:disabled {
		cursor: not-allowed;
		transform: scale(1);
		background-color: ${lighten(0.5, darkGrey)};
	}
`;

export default StyledButton;
