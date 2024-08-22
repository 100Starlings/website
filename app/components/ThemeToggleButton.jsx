"use client";

// components/ThemeToggleButton.js
import { useEffect, useState } from "react";

const ThemeToggleButton = () => {
	const [theme, setTheme] = useState(() => {
		if (typeof window !== "undefined") {
			return (
				localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
			);
		}
		return "dark";
	});

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<div className="flex items-center gap-2">
			{/* <span className="text-xs">Switch to {theme === "light" ? "Dark" : "Light"} Mode</span> */}
			<button
				onClick={toggleTheme}
				className="relative inline-flex items-center h-5 w-10 rounded-full transition-colors duration-300 focus:outline-none focus:ring-0"
				aria-label="Toggle Theme"
			>
				<span
					className={`${
						theme === "light" ? "translate-x-0" : "translate-x-6"
					} inline-block w-5 h-5 transform bg-green z-10 rounded-full shadow-md transition-transform duration-300 ease-in-out`}
				/>
				<span
					className={`absolute inset-0 rounded-full transition-colors duration-300 ease-in-out ${
						theme === "light" ? "bg-gray-300" : "bg-gray-700"
					}`}
				/>
			</button>
		</div>
	);
};

export default ThemeToggleButton;
