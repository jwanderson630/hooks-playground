import React, { Component } from "react";
import styled from "styled-components";
import "normalize.css";
import "./App.css";
import Playground1 from "./playgrounds/Playground1";
import GlobalStyles from "./GlobalStyles";

const StyledPlayground = styled.div`
	margin: 50px auto;
	background-color: white;
	border-radius: 10px;
	box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1), 2px 2px 16px 5px rgba(0, 0, 0, 0.1);
	width: 80%;
	max-width: 800px;
	padding: 20px;
`;

const StyledMain = styled.main`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

class App extends Component {
	render() {
		return (
			<div className="App">
				<StyledMain>
					<StyledPlayground>
						<Playground1 />
					</StyledPlayground>
					<GlobalStyles />
				</StyledMain>
			</div>
		);
	}
}

export default App;
