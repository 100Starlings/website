import React from "react";
import services from "@/data/offeredServices.json";
import specialists from "@/data/team.json";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

// const services_name = Object.keys(services);
// console.log(services_name);

export default function Page({ params }: { params: { slug: string } }) {
	const currentService = services.find((service) => service.slug === params.slug);
	const currentSpecialist = specialists.find((specialist) => specialist.first_name === currentService?.specialist);

	// Handle case where service is not found
	if (!currentService) {
		return <div>Service not found</div>;
	}

	return (
		<div className="flex flex-col gap-[3rem] mb-[3rem] mx-[1rem] lg:mx-[2rem] pt-[3.75rem]">
			<div className="flex relative w-full flex-col card items-center justify-center min-h-[72svh] rounded-xl overflow-hidden">
				<Image
					src={currentService.imageUrl || ""}
					layout="fill"
					objectFit="cover"
					objectPosition="center"
					alt="Hero background"
					quality={100}
					className="z-[0] image"
				/>
				<div className="flex flex-col text-white items-center w-full justify-center flex-grow backdrop-blur-none bg-gradient-to-t from-black/20 via-black/50 to-black/20">
					<h1 className="header large mb-[1rem]">{currentService.name}</h1>
					<p className="text max-w-xl text-center px-4 lg:px-0">{currentService.description}</p>
					<a href="#book" className="button mt-6">
						Book a free session
					</a>
				</div>
			</div>
			<div className="mx-auto flex flex-col lg:flex-row w-full max-w-7xl overflow-hidden">
				{/* <p className="header">Our Services</p> */}
				<ul className="flex flex-col lg:flex-row  gap-[1.5rem] lg:gap-[3rem] justify-between w-full mx-auto">
					{currentService.features.map((feature, index) => (
						<li key={index} className="flex gap-2 text card w-full p-[2rem]">
							<CheckCircleIcon width={24} /> {feature}
						</li>
					))}
				</ul>
			</div>
			<div id="book" className="mx-auto flex flex-col lg:flex-row w-full max-w-7xl card overflow-hidden min-h-[40rem]">
				<div className="relative w-full min-w-[50%] min-h-[40svh]">
					<Image
						src={currentSpecialist?.image_url || ""}
						className="rounded-xl"
						fill
						alt="Image of the team"
						style={{ objectFit: "cover" }}
					/>
				</div>
				<div className="flex gap-6 flex-col w-full h-full p-8 lg:p-[4rem] justify-center my-auto">
					<p className="header">Meet {currentService.specialist}, our specialist</p>
					<p className="text">
						{currentService.specialist} {currentSpecialist?.description}
					</p>
					<div>
						<p className="text">Solve your problems with 1-1 guidance</p>
						<p className="font-light mb-6">Schedule a 30min call with our specialist </p>
						<a href={currentSpecialist?.calendar || ""} className="button dark">
							Book a session
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
