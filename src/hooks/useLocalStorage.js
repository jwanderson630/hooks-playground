import { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue, callback) => {
	const initialValue = () => {
		const valueFromStorage = JSON.parse(
			localStorage.getItem(key) || JSON.stringify(defaultValue)
		);
		if (callback) {
			callback(valueFromStorage);
		}
		return valueFromStorage;
	};
	const [storage, setStorage] = useState(initialValue);
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(storage));
	}, [storage]);

	return [storage, setStorage];
};

export default useLocalStorage;
