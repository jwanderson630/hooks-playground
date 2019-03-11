import React from "react";
import styled from "styled-components";
import { lighten } from "polished";
import { green, darkGrey } from "../utilities";

const StyledRadioLabel = styled.label`
	background-color: white;
	color: ${darkGrey};
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
	}
	&.checked {
		background-color: ${green};
		color: white;
		&:hover {
			background-color: ${lighten(0.05, green)};
			transform: scale(1.1);
		}
	}
`;

const RadioInput = ({ name, label, id, checked, onChange }) => {
	return (
		<div>
			<input
				onChange={onChange}
				style={{ display: "none" }}
				type="radio"
				name={name}
				id={id}
				checked={checked}
			/>
			<StyledRadioLabel className={checked ? "checked" : null} htmlFor={id}>
				{label}
			</StyledRadioLabel>
		</div>
	);
};

export default RadioInput;
