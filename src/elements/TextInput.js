import React from "react";
import styled from "styled-components";
import StyledLabel from "./StyledLabel";

const StyledTextInput = styled.input`
	display: block;
	text-align: left;
	width: 100%;
	font-size: 1.8rem;
	padding: 1rem 0.5rem;
	margin-bottom: 1rem;
	border-radius: 4px;
	border: 1px solid rgba(0, 0, 0, 0.2);
`;

const TextInput = ({ name, value, onChange }) => {
	return (
		<div>
			<StyledLabel htmlFor={name}>{name}</StyledLabel>
			<StyledTextInput name={name} onChange={e => onChange(e.target.value)} value={value} type="text" />
		</div>
	);
};

export default TextInput;
