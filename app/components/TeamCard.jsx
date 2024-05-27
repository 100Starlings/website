"use client";

import { useState } from "react";
import Image from "next/image";

export default function TeamCard({ id, first_name, last_name, title, description, image_url }) {
	const [showDesc, showDescText] = useState(false);

	const handleAppendString = (data) => {
		const newUrl = `${pathname}${data}`;
		router.push(newUrl);
	};

	return (
		<div
			onMouseEnter={() => {
				showDescText(true);
			}}
			onMouseLeave={() => {
				showDescText(false);
			}}
			passHref
			key={id}
			className="w-[50vw] min-w-[50vw] lg:min-w-full lg:w-full h-full  bg-cover bg-bottom bg-no-repeat relative" //cursor-pointer
		>
			<Image src={image_url} fill style={{ objectFit: "cover" }} alt={`Picture of ${first_name}`} />
			<div
				className={
					showDesc
						? "p-2 w-full h-full lg:avatar-overlay-hover bottom-0 backdrop-blur-xl bg-black/60  absolute z-10  flex items-end overflow-hidden"
						: "p-2 w-full h-full bottom-0 backdrop-blur-none bg-gradient-to-b from-black/0 to-black text-gray-50 absolute z-10  flex items-end overflow-hidden"
				}
			>
				<div>
					<h1 className="text-gray-200 text-[0.85rem] md:text-[1rem] font-semibold font-primary">
						{first_name} {last_name}
					</h1>
					<h2 className="text-[0.65rem] md:text-[0.7rem] font-base font-secondary text-green">{title}</h2>
					{showDesc ? (
						<div>
							<p className="pt-2 text-[0.75rem] md:text-[0.85rem] font-secondary font-light">
								{description.length > 100 ? `${description.substring(0, 100)}...` : description}
							</p>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
}
