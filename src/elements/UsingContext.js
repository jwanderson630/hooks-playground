import React, { useContext } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { lighten } from "polished";
import { ThemeContext } from "../playgrounds/Playground4";
import { darkGrey, green } from "../utilities";

const StyledContainer = styled(animated.div)`
	display: grid;
	width: 70%;
	margin: 0 auto;
	justify-content: center;
	align-content: center;
	box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05), 2px 2px 15px 2px rgba(0, 0, 0, 0.07);
	padding: 2rem;
	border-radius: 0.4rem;
`;

const StyledToggle = styled(animated.div)`
	width: 10rem;
	height: 5rem;
	box-shadow: inset 1px 1px 4px 2px rgba(0, 0, 0, 0.15);
	border-radius: 3rem;
	cursor: pointer;
`;

const StyledSlider = styled(animated.div)`
	height: 5rem;
	width: 5rem;
	box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1), 2px 2px 10px 3px rgba(0, 0, 0, 0.05);
	border-radius: 50%;
	background-color: white;
	position: relative;
`;

function UsingContext() {
	const { theme, setTheme } = useContext(ThemeContext);
	const springProps = {
		light: {
			backgroundColor: { to: "white", from: darkGrey },
			toggleColor: { to: green, from: "#e67e22" },
			sliderColor: { to: "white", from: lighten(0.1, darkGrey) },
			sliderPosition: { to: "-0.2rem", from: "5.2rem" },
		},
		dark: {
			backgroundColor: { to: darkGrey, from: "white" },
			toggleColor: { to: "#e67e22", from: green },
			sliderColor: { to: lighten(0.1, darkGrey), from: "white" },
			sliderPosition: { to: "5.2rem", from: "-0.2rem" },
		},
	};
	const backgroundSpring = useSpring({
		backgroundColor: springProps[theme].backgroundColor.to,
		from: { backgroundColor: springProps[theme].backgroundColor.from },
	});
	const toggleSpring = useSpring({
		backgroundColor: springProps[theme].toggleColor.to,
		from: { backgroundColor: springProps[theme].toggleColor.from },
	});
	const sliderSpring = useSpring({
		backgroundColor: springProps[theme].sliderColor.to,
		transform: `translateX(${springProps[theme].sliderPosition.to})`,
		from: {
			backgroundColor: springProps[theme].sliderColor.from,
			left: `translateX(${springProps[theme].sliderPosition.from})`,
		},
	});
	return (
		<StyledContainer style={backgroundSpring}>
			<StyledToggle style={toggleSpring} onClick={() => setTheme()}>
				<StyledSlider style={sliderSpring} />
			</StyledToggle>
		</StyledContainer>
	);
}

export default UsingContext;
