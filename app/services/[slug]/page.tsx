// eslint-disable
// @ts-nocheck

"use client";
import React, { useEffect, useState } from "react";
import services from "@/data/offeredServices.json";
import specialists from "@/data/team.json";
import Image from "next/image";
import Starling from "@/public/images/starlings.jpeg";
import SpecialistDescription from "@/app/components/SpecialistDescription";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import TeamCard from "@/app/components/TeamCard";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

type SpecialistObject = {
	name: string;
	description: string;
};

type Service = {
	name: string;
	slug: string;
	features: string[];
	specialists: (string | SpecialistObject)[];
	description: string;
	experts: string[];
	imageUrl: string;
};

type Specialist = {
	id: number;
	first_name: string;
	last_name: string;
	title: string;
	description: string;
	image_url: string;
};

export default function Page({ params }: { params: { slug: string } }) {
	const membersRef = React.useRef<HTMLDivElement>(null);
	const [showArrows, setShowArrows] = useState(false);

	const currentService = services.find((service) => service.slug === params.slug) as Service | undefined;

	useEffect(() => {
		if (currentService && membersRef.current && currentExperts.length > 1) {
			const totalWidth = membersRef.current.scrollWidth;
			const visibleWidth = membersRef.current.clientWidth;

			setShowArrows(totalWidth > visibleWidth);
		}
	}, [currentService]);

	if (!currentService) {
		return <div>Service not found</div>;
	}

	const currentExperts = currentService.experts
		.map((expert) => {
			const [first_name, last_name] = expert.split(" ");
			return specialists.find(
				(specialist) => specialist.first_name === first_name && specialist.last_name === last_name
			);
		})
		.filter((expert): expert is Specialist => expert !== undefined);

	const currentSpecialists = currentService.specialists
		.map((specialist) => {
			if (typeof specialist === "string") {
				const [first_name, last_name] = specialist.split(" ");
				return specialists.find(
					(specialist) => specialist.first_name === first_name && specialist.last_name === last_name
				);
			} else if ("name" in specialist) {
				const [first_name, last_name] = specialist.name.split(" ");
				return specialists.find(
					(specialist) => specialist.first_name === first_name && specialist.last_name === last_name
				);
			}
			return undefined;
		})
		.filter((specialist): specialist is Specialist => specialist !== undefined);

	const scrollLeft = () => {
		if (membersRef.current) {
			membersRef.current.scrollBy({ left: -256, behavior: "smooth" });
		}
	};

	const scrollRight = () => {
		if (membersRef.current) {
			membersRef.current.scrollBy({ left: 256, behavior: "smooth" });
		}
	};

	return (
		<div className="flex flex-col gap-[3rem] mb-[3rem] mx-[1rem] lg:mx-[2rem] pt-[3.75rem]">
			<div className="flex relative w-full flex-col card items-center justify-center min-h-[72svh] rounded-xl overflow-hidden">
				<Image src={currentService.imageUrl || ""} fill alt="Hero background" quality={100} className="z-[0] image" />
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
						<li key={index} className="flex gap-2 text card w-full p-[2rem]">
							<p className="text-green">
								<CheckCircleIcon width={24} />
							</p>
							{feature}
						</li>
					))}
				</ul>
			</div>

			<div
				id="contact-section"
				className="flex items-center flex-row flex-wrap sm:flex-nowrap max-w-7xl mx-auto"
			>
				<div id="section-image" className="sm:basis-1/2">
					<Image src={Starling} className="rounded-xl card" alt="Starling" />
				</div>
				<SpecialistDescription currentSpecialists={currentSpecialists} currentService={currentService} />
			</div>

			<div id="expert-section" className="w-full overflow-x-visible flex flex-col gap-6">
				<div className="flex w-full max-w-7xl mx-auto justify-between items-center">
					<p className="text-lg lg:text-2xl">
						Our {currentService.name.toLowerCase()} {currentSpecialists.length > 1 ? "experts" : "expert"}
					</p>
					{showArrows && (
						<div className="flex gap-4">
							<button aria-label="Scroll left button" onClick={scrollLeft}>
								<ChevronLeftIcon className="h-8 w-8" />
							</button>
							<button aria-label="Scroll right button" onClick={scrollRight}>
								<ChevronRightIcon className="h-8 w-8" />
							</button>
						</div>
					)}
				</div>

				<div className="w-full overflow-x-visible">
					<div
						ref={membersRef}
						style={{ paddingInline: `max(0rem, calc((100vw - 83.5rem) / 2))` }}
						className="flex gap-6 w-full overflow-x-auto snap-x snap-center snap-mandatory overflow-y-visible"
					>
						{currentExperts.map(({ id, first_name, last_name, title, description, image_url }) => (
							<Link href={`/team/${first_name}-${last_name}`} key={id} className="overflow-visible">
								<TeamCard
									id={id}
									first_name={first_name}
									last_name={last_name}
									title={title}
									description={description}
									image_url={image_url}
								/>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
