import React from "react";
import styled from "styled-components";
import StyledContainer from "../elements/StyledContainer";
import StyledPlayground from "../elements/StyledPlayground";
import useKeyCode from "../hooks/useKeyCode";
import { lighten } from "polished";
import { darkGrey } from "../utilities";

const InputGrid = styled.div`
	display: grid;
	grid-template-columns: auto auto 1fr;
	grid-gap: 1rem;
`;

function Playground5() {
	const { key, keyCode } = useKeyCode();
	return (
		<StyledPlayground>
			<h1>Hook 5: KeyCodes with Custom Hook</h1>
			<StyledContainer label="Input">
				<InputGrid>
					{key ? (
						<>
							<strong>You pressed:</strong> {key === " " ? "Space" : key}
						</>
					) : (
						<span style={{ color: lighten(0.5, darkGrey) }}>(Press a key to see its code!)</span>
					)}
				</InputGrid>
			</StyledContainer>
			<StyledContainer label="Output">
				{keyCode ? (
					<>
						<strong>KeyCode:</strong> {keyCode}
					</>
				) : null}
			</StyledContainer>
		</StyledPlayground>
	);
}

export default Playground5;
