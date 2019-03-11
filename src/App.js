import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import Playground1 from "./playgrounds/Playground1";
import Playground2 from "./playgrounds/Playground2";
import Playground3 from "./playgrounds/Playground3";
import Playground4 from "./playgrounds/Playground4";
import Playground5 from "./playgrounds/Playground5";
import GlobalStyles from "./GlobalStyles";

const StyledMain = styled.main`
	display: grid;
	padding: 5rem 2rem;
	grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
	grid-gap: 2rem;
`;

class App extends Component {
	render() {
		return (
			<div className="App">
				<StyledMain>
					<Playground1 />
					<Playground2 />
					<Playground3 />
					<Playground4 />
					<Playground5 />
					<GlobalStyles />
				</StyledMain>
			</div>
		);
	}
}

export default App;
