import { useEffect, useState } from "react";

const useKeyCode = () => {
	const [key, setKey] = useState({ key: "", keyCode: "" });
	useEffect(() => {
		window.addEventListener("keydown", e => {
			setKey({
				key: e.key,
				keyCode: e.keyCode
			});
			return () => {
				window.removeEventListener("keydown", e => {
					setKey({
						key: e.key,
						keyCode: e.keyCode
					});
				});
			};
		});
	}, []);
	return key;
};

export default useKeyCode;
