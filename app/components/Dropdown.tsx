// components/Dropdown.js
import { ArrowRightCircleIcon, ArrowRightIcon, ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const Dropdown = ({ title, items }: { title: string; items: any[] }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="w-full flex flex-col gap-4 my-2 lg:my-4">
			<button onClick={toggleDropdown} className="w-full flex text-lg justify-between items-center focus:outline-none">
				{title}
				{isOpen ? (
					<ChevronDownIcon className="h-4 w-4 text-[--devider]" />
				) : (
					<ChevronRightIcon className="h-4 w-4 text-[--devider]" />
				)}
			</button>
			{isOpen && <p className="text-[--text-darker]">{items}</p>}
		</div>
	);
};

export default Dropdown;
