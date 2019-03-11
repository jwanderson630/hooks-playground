import React, { useState } from "react";
import styled from "styled-components";
import StyledContainer from "../elements/StyledContainer";
import StyledPlayground from "../elements/StyledPlayground";
import RadioInput from "../elements/RadioInput";
import UsingContext from "../elements/UsingContext";

const InputGrid = styled.div`
	display: grid;
	grid-template-columns: auto auto 1fr;
	grid-gap: 1rem;
`;

export const ThemeContext = React.createContext({
	theme: "light",
	setTheme: () => {}
});

function Playground4() {
	const [checkedValue, setCheckedValue] = useState("light");
	return (
		<StyledPlayground>
			<h1>Hook 4: Theme with useContext</h1>
			<ThemeContext.Provider
				value={{
					theme: checkedValue,
					setTheme: () => {
						const newTheme = checkedValue === "light" ? "dark" : "light";
						setCheckedValue(newTheme);
					}
				}}
			>
				<StyledContainer label="Theme Control">
					<InputGrid>
						<RadioInput
							name="theme"
							id="light"
							label="☀️ Light"
							checked={checkedValue === "light"}
							onChange={() => setCheckedValue("light")}
						/>
						<RadioInput
							name="theme"
							id="dark"
							label="🌗 Dark"
							checked={checkedValue === "dark"}
							onChange={() => setCheckedValue("dark")}
						/>
					</InputGrid>
				</StyledContainer>
				<StyledContainer label="Nested Child">
					<UsingContext />
				</StyledContainer>
			</ThemeContext.Provider>
		</StyledPlayground>
	);
}

export default Playground4;
