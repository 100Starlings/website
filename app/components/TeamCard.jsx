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
			className="min-w-[16rem] h-[16rem] rounded-lg gallery-photo overflow-hidden bg-cover bg-bottom bg-no-repeat relative" //cursor-pointer
		>
			<Image src={image_url} fill style={{ objectFit: "cover" }} alt={`Picture of ${first_name}`} />
			<div
				className={
					showDesc
						? "p-2 w-full h-full lg:avatar-overlay-hover bottom-0 backdrop-blur-sm nav-bg  absolute z-10  flex items-end overflow-hidden"
						: "p-2 w-full h-[40%] bottom-0 backdrop-blur-none bg-gradient-to-b from-black/0 to-black/80 absolute z-10  flex items-end overflow-hidden"
				}
			>
				<div>
					<h1
						className={
							showDesc
								? "text-[0.85rem] md:text-[1rem] font-semibold text-[--text-color]"
								: "text-[0.85rem] md:text-[1rem] font-semibold text-white"
						}
					>
						{first_name} {last_name}
					</h1>
					<h2 className="text-[0.65rem] md:text-[0.7rem] font-base text-green">{title}</h2>
					{showDesc ? (
						<div>
							<p className="pt-2 text-[0.75rem] md:text-[0.85rem]">
								{description.length > 100 ? `${description.substring(0, 100)}...` : description}
							</p>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
}
