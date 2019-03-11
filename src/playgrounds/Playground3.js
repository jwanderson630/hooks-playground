import React from "react";
import styled from "styled-components";
import StyledContainer from "../elements/StyledContainer";
import StyledPlayground from "../elements/StyledPlayground";
import { darkGrey, green } from "../utilities";
import { lighten, rgba } from "polished";
import useBattery from "../hooks/useBattery";

const StyledBattery = styled.div`
	border-radius: 0.8rem;
	border: 3px solid ${lighten(0.7, darkGrey)};
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 0.4rem;
	height: 8rem;
	width: 16rem;
	padding: 0.5rem;
	position: relative;
	margin-right: 4rem;
	:after {
		content: "";
		background: ${lighten(0.7, darkGrey)};
		border-radius: 2px;
		width: 1rem;
		height: 2.5rem;
		position: absolute;
		border-radius: 0.1rem 0.4rem 0.4rem 0.1rem;
		top: 2.3rem;
		left: 16rem;
	}
`;

const StyledBatteryGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const StyledChargeLevel = styled.div`
	background-color: ${rgba(darkGrey, 0.1)};
	border-radius: 0.4rem;
	&.full {
		background-color: ${green};
	}
	&.pulse {
		animation: pulse 5s infinite ease;
	}

	@keyframes pulse {
		0% {
			background-color: ${rgba(green, 0.1)};
		}
		50% {
			background-color: ${rgba(green, 1)};
		}
		100% {
			background-color: ${rgba(green, 0.1)};
		}
	}
`;

const StyledChargeInfo = styled.div`
	display: flex;
	align-items: center;
	height: 8rem;
`;

function Playground3() {
	const { charging, chargeLevel, supportStatus } = useBattery();

	const getCellStatus = (min, max) => {
		if (chargeLevel > min && chargeLevel < max && charging) {
			return "pulse";
		} else if (chargeLevel > min) {
			return "full";
		} else {
			return "empty";
		}
	};

	if (supportStatus === "loading") {
		return (
			<StyledPlayground>
				<h1>Hook 3: Battery level with useEffect</h1>
				<StyledContainer label="Battery Status">
					Loading your battery status 🔋
				</StyledContainer>
			</StyledPlayground>
		);
	}
	if (supportStatus === "not supported") {
		return (
			<StyledPlayground>
				<h1>Hook 3: Battery level with useEffect</h1>
				<StyledContainer label="Battery Status">
					Battery status is not supported in your browser. ☹️
				</StyledContainer>
			</StyledPlayground>
		);
	}
	return (
		<StyledPlayground>
			<h1>Hook 3: Battery level with useEffect</h1>
			<StyledContainer label="Battery Status">
				<StyledBatteryGrid>
					<StyledBattery>
						<StyledChargeLevel className={getCellStatus(0, 0.25)} />
						<StyledChargeLevel className={getCellStatus(0.25, 0.5)} />
						<StyledChargeLevel className={getCellStatus(0.5, 0.75)} />
						<StyledChargeLevel className={getCellStatus(0.75, 1)} />
					</StyledBattery>
					<StyledChargeInfo>
						<div>
							<strong>Charging</strong>: {charging ? "True" : "False"}
							<br />
							<strong>Charge Level</strong>: {Math.floor(chargeLevel * 100)}%
						</div>
					</StyledChargeInfo>
				</StyledBatteryGrid>
			</StyledContainer>
		</StyledPlayground>
	);
}

export default Playground3;
