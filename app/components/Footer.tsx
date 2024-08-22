import React from "react";
import ThemeToggleButton from "./ThemeToggleButton";

export default function Footer() {
	return (
		<footer className="flex flex-col w-full max-w-7xl p-4 lg:px-0 mx-auto h-auto justify-between">
			<div className="flex z-40 gap-4 items-center justify-center">
				<p className="text-sm">100Starlings © 2024</p>
				{/* <p className="opacity-50">|</p>
				<Link href="/careers">
					<p className="text-sm">Careers</p>
				</Link> */}
				<ThemeToggleButton />
			</div>
		</footer>
	);
}
