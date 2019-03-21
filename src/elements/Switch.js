import React from "react";
import { useSpring, animated, config } from "react-spring";
import styled from "styled-components";
import { lighten } from "polished";
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

function useToggleWithSprings(isOn) {
	const state = isOn ? "on" : "off";
	const springProps = {
		on: {
			toggleColor: { to: green, from: lighten(0.5, darkGrey) },
			sliderPosition: { to: "5.2rem", from: "-0.2rem" },
		},
		off: {
			toggleColor: { to: lighten(0.5, darkGrey), from: green },
			sliderPosition: { to: "-0.2rem", from: "5.2rem" },
		},
	};
	const toggleSpring = useSpring({
		backgroundColor: springProps[state].toggleColor.to,
		from: { backgroundColor: springProps[state].toggleColor.from },
	});
	const sliderSpring = useSpring({
		transform: `translateX(${springProps[state].sliderPosition.to})`,
		from: {
			transform: `translateX(${springProps[state].sliderPosition.from})`,
		},
		config: config.stiff,
	});
	return [toggleSpring, sliderSpring];
}

function Switch({ onClick, on }) {
	const [toggleSpring, sliderSpring] = useToggleWithSprings(on);
	return (
		<StyledContainer>
			<StyledToggle style={toggleSpring} onClick={onClick}>
				<StyledSlider style={sliderSpring} />
			</StyledToggle>
		</StyledContainer>
	);
}

export default Switch;
