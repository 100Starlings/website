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
		<div className="flex flex-col gap-[3rem] mb-[3rem] mx-[1rem] lg:mx-[2rem]">
			<div className="flex relative w-full flex-col card items-center justify-center min-h-[72svh] rounded-md overflow-hidden">
				<Image
					src={currentService.imageUrl || ""}
					layout="fill"
					objectFit="cover"
					objectPosition="center"
					alt="Hero background"
					quality={100}
					className="z-[0] blur-[0px] brightness-[0.9] contrast-[1.1] grayscale-[0] opacity-[0.8]"
				/>
				<div className="flex flex-col items-center w-full justify-center flex-grow bg--black/80 backdrop-blur-none bg-[--card-bg-60]">
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
			<div id="book" className="mx-auto flex flex-col lg:flex-row w-full max-w-7xl card overflow-hidden min-h-[30rem]">
				<div className="relative w-full min-w-[50%] min-h-[40svh]">
					<Image
						src={currentSpecialist?.image_url || ""}
						className="rounded-md "
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
						<p className="font-thin mb-6">Schedule a 30min call with our specialist </p>
						<a href={currentSpecialist?.calendar || ""} className="button">
							Book a session
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
