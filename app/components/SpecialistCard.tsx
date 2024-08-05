import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SpecialistCard(secialistdata: any) {
	console.log(secialistdata.data);
	return (
		<div className="flex">
			<div className="relative w-full min-w-[50%] min-h-[40svh]">
				<Image
					src={secialistdata.data.image_url || ""}
					className="rounded-xl"
					fill
					alt="Image of the team"
					style={{ objectFit: "cover" }}
				/>
			</div>
			<div className="flex gap-6 flex-col w-full h-full p-8 lg:p-[4rem] justify-center my-auto">
				<p className="header">Meet {secialistdata.data.first_name},</p>
				<p className="text">{secialistdata.data.description}</p>
				<div>
					<p className="text">Solve your problems with 1-1 guidance</p>
					<p className="font-light mb-6">Schedule a 30min call with our specialist</p>
					<Link href={secialistdata.data.calendar || "/#contact"} className="button dark">
						Book a session
					</Link>
				</div>
			</div>
		</div>
	);
}
