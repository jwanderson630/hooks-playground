import React from "react";
import styled from "styled-components";
import StyledLabel from "./StyledLabel";

const StyledCheckInput = styled.input`
	display: none;
	text-align: left;
`;

const StyledLabelCheck = styled.label`
	display: grid;
	align-content: center;
	justify-content: center;
	text-align: left;
	background-color: white;
	box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
	width: 3rem;
	height: 3rem;
	border-radius: 4px;
	transition: background-color 0.2s ease;
	cursor: pointer;
	svg {
		width: 1.5rem;
		transform: scale(0);
		transition: transform 0.2s ease;
		path {
			fill: white;
		}
	}
	&:hover {
		background-color: rgba(0, 0, 0, 0.3);
		svg {
			transform: scale(1);
		}
	}
	&.checked {
		background-color: rgba(39, 174, 96, 1);
		box-shadow: 0 0 0 1px rgba(39, 174, 96, 0.2);
		svg {
			transform: scale(1.2);
		}
	}
`;

const CheckInput = ({ name, checked, onChange, label }) => {
	return (
		<div>
			{label ? <StyledLabel htmlFor={name}>{label}</StyledLabel> : null}
			<StyledLabelCheck htmlFor={name} className={checked ? "checked" : ""}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
				</svg>
			</StyledLabelCheck>
			<StyledCheckInput
				id={name}
				checked={checked}
				onChange={() => onChange()}
				type="checkbox"
			/>
		</div>
	);
};

export default CheckInput;
