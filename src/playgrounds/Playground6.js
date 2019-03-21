import React, { Component } from "react";
import styled from "styled-components";
import StyledContainer from "../elements/StyledContainer";
import StyledPlayground from "../elements/StyledPlayground";
import Toggle from "../elements/Toggle";

const InputGrid = styled.div`
	display: grid;
	grid-gap: 1rem;
`;

class Playground6 extends Component {
	state = { on: false };

	toggle = currentState => {
		console.log(`Currently the toggle is: ${currentState ? "On" : "Off"}`);
	};

	render() {
		return (
			<StyledPlayground>
				<h1>Pattern 1: </h1>
				<StyledContainer label="Toggle">
					<InputGrid>
						<Toggle onToggle={this.toggle}>
							<Toggle.On>The button is on</Toggle.On>
							<Toggle.Off>The button is off</Toggle.Off>
							<div>
								<Toggle.Button />
							</div>
						</Toggle>
					</InputGrid>
				</StyledContainer>
			</StyledPlayground>
		);
	}
}

export default Playground6;
