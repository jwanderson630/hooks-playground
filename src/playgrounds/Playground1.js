import React, { useState } from "react";
import TextInput from "../elements/TextInput";
import CheckInput from "../elements/CheckInput";
import StyledContainer from "../elements/StyledContainer";

function Playground1() {
	const [state, setState] = useState({ text: "Check out this state!", checked: false });
	const mergeState = partialState => {
		setState(prevState => ({
			...prevState,
			...partialState,
		}));
	};
	return (
		<div>
			<h1>Hook 1: Simple State</h1>
			<StyledContainer label="Inputs">
				<TextInput name="Text" value={state.text} onChange={newVal => mergeState({ text: newVal })} />
				<CheckInput name="Check" checked={state.checked} onChange={() => mergeState({ checked: !state.checked })} />
			</StyledContainer>
			<StyledContainer label="Outputs">
				<div>Text: {state.text}</div>
				<div>Checked: {String(state.checked)}</div>
			</StyledContainer>
		</div>
	);
}

export default Playground1;
