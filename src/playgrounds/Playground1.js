import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../elements/TextInput";
import CheckInput from "../elements/CheckInput";
import StyledContainer from "../elements/StyledContainer";
import StyledPlayground from "../elements/StyledPlayground";

const InputGrid = styled.div`
	display: grid;
	grid-template-rows: auto auto;
	grid-gap: 1rem;
`;

function Playground1() {
	const [state, setState] = useState({
		text: "Check out this state!",
		checked: false
	});
	const mergeState = partialState => {
		setState(prevState => ({
			...prevState,
			...partialState
		}));
	};
	return (
		<StyledPlayground>
			<h1>Hook 1: Simple useState</h1>
			<StyledContainer label="Inputs">
				<InputGrid>
					<TextInput
						label="Text"
						name="Text"
						value={state.text}
						onChange={newVal => mergeState({ text: newVal })}
					/>
					<CheckInput
						name="Check"
						label="Check"
						checked={state.checked}
						onChange={() => mergeState({ checked: !state.checked })}
					/>
				</InputGrid>
			</StyledContainer>
			<StyledContainer label="Outputs">
				<div>Text: {state.text}</div>
				<div>Checked: {String(state.checked)}</div>
			</StyledContainer>
		</StyledPlayground>
	);
}

export default Playground1;
