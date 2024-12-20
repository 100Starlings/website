import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import React from "react";

export default function Specialistx(specialist: any) {
	const router = useRouter(); // Initialize useRouter

	return (
		<div className="flex flex-col lg:flex-row w-full h-auto">
			<div className="relative w-full min-w-[50%] min-h-[40svh]">
				<Image
					src={specialist.data.image_url || ""}
					className="rounded-xl bg-cover"
					fill
					alt="Image of the team"
					style={{ objectFit: "cover" }}
				/>
			</div>
			<div className="flex gap-3 lg:gap-6 flex-col w-full h-full p-4 lg:p-[4rem] justify-center my-auto">
				<p className="header">Meet {specialist.data.first_name},</p>
				<p className="text">{specialist.description}</p>

				<div>
					<p className="text">Solve your problems with 1-1 guidance</p>
					<p className="font-light mb-6">Schedule a 30min call with our specialist</p>
					<button
						onClick={(event) => {
							event.preventDefault();
							const url = specialist.data.calendar || `mailto:${specialist.data.email}`;
							if (url.startsWith("mailto:")) {
								window.location.href = url;
							} else {
								router.push(url);
							}
						}}
						className="button dark"
					>
						Book a session
					</button>
				</div>
			</div>
		</div>
	);
}
