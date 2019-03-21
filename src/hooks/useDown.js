import { useState, useRef, useEffect } from "react";

function useDown() {
	const [down, setDown] = useState(false);
	const ref = useRef();
	useEffect(() => {
		if (ref.current) {
			ref.current.addEventListener("mousedown", () => {
				setDown(true);
			});
			ref.current.addEventListener("touchstart", () => {
				setDown(true);
			});
			ref.current.addEventListener("mouseup", () => {
				setDown(false);
			});
			ref.current.addEventListener("touchend", () => {
				setDown(false);
			});
		}
		return function cleanup() {
			if (ref.current) {
				ref.current.removeEventListener("mousedown", () => {
					setDown(true);
				});
				ref.current.removeEventListener("touchstart", () => {
					setDown(true);
				});
				ref.current.addEventListener("mouseup", () => {
					setDown(false);
				});
				ref.current.addEventListener("touchend", () => {
					setDown(false);
				});
			}
		};
	}, [ref]);
	return [ref, down];
}

export default useDown;
