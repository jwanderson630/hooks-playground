import { useState, useEffect } from "react";

const useBattery = () => {
	const [chargeLevel, setChargeLevel] = useState(0);
	const [charging, setCharging] = useState(false);
	const [supportStatus, setSupportStatus] = useState("loading");
	useEffect(() => {
		if (navigator.getBattery) {
			navigator
				.getBattery()
				.then(battery => {
					setSupportStatus("supported");
					setChargeLevel(battery.level);
					setCharging(battery.charging);
					battery.addEventListener("levelchange", e =>
						setChargeLevel(e.currentTarget.level)
					);
					battery.addEventListener("chargingchange", e => {
						setCharging(e.currentTarget.charging);
					});
					return () => {
						battery.removeEventListener("levelchange", e =>
							setChargeLevel(e.level)
						);
						battery.removeEventListener("chargingchange", () =>
							setCharging(!charging)
						);
					};
				})
				.catch(() => setSupportStatus("not supported"));
		} else setSupportStatus("not supported");
	}, []);
	return { charging, chargeLevel, supportStatus };
};

export default useBattery;
