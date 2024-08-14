"use client";
import React from "react";
import services from "@/data/offeredServices.json";
import specialists from "@/data/team.json";
import Image from "next/image";
import Snowflake from "@/public/images/snowflake.jpg";
import SpecialistDescription from "@/app/components/SpecialistDescription"
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function Page({ params }: { params: { slug: string } }) {
  const currentService = services.find((service) => service.slug === params.slug);
  const currentSpecialists = specialists.filter(
    (specialist) =>
      currentService?.specialists &&
      currentService.specialists.includes(`${specialist.first_name} ${specialist.last_name}`)
  );

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
						Book a session
					</a>
				</div>
			</div>

			<div className="mx-auto flex flex-col lg:flex-row w-full max-w-7xl overflow-show">
				<ul className="flex flex-col lg:flex-row gap-[1.5rem] lg:gap-[3rem] justify-between w-full mx-auto">
					{currentService.features.map((feature, index) => (
						<li key={index} className="flex gap-2 text card w-full p-[2rem] ">
							<p className="text-green">
								<CheckCircleIcon width={24} />
							</p>
							{feature}
						</li>
					))}
				</ul>
			</div>

			<div id="contact section" className="card flex items-center sm:items-end flex-row flex-wrap sm:flex-nowrap max-w-7xl mx-auto">
				<div id="section-image" className="sm:basis-1/2 min-w-full sm:min-w-1">
					<Image
						src={Snowflake}
						className="rounded-xl"
						alt="Snowflake"
					/>
				</div>

				<SpecialistDescription currentSpecialists={currentSpecialists} />
			</div>
		</div>
	);
}
