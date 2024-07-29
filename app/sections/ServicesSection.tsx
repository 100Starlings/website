"use client";

import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import services from "@/data/offeredServices.json";

export default function ServicesSection() {
	const servicesRef = React.useRef<HTMLDivElement>(null);

	const scrollLeft = () => {
		if (servicesRef.current) {
			servicesRef.current.scrollBy({ left: -368, behavior: "smooth" });
		}
	};
	const scrollRight = () => {
		if (servicesRef.current) {
			servicesRef.current.scrollBy({ left: 368, behavior: "smooth" });
		}
	};

	return (
		<section id="services" className="max-w-7xl w-full h-full flex flex-col gap-6">
			<div className="flex w-full max-w-7xl mx-auto justify-between items-center">
				<p className="header lg:mx-auto">How can we help you?</p>
				<div className="flex gap-4 lg:hidden">
					<button aria-label="Scroll left button" onClick={scrollLeft}>
						<ChevronLeftIcon className="h-6 w-6" />
					</button>
					<button aria-label="Scroll right button" onClick={scrollRight}>
						<ChevronRightIcon className="h-6 w-6" />
					</button>
				</div>
			</div>
			<div
				ref={servicesRef}
				className="flex lg:grid lg:grid-cols-4 gap-4 lg:gap-8 lg:overflow-visible pb-3 w-full overflow-auto snap-x snap-center snap-mandatory"
			>
				{services.map((feature) => (
					<Link
						href={`/services/${feature.slug}`}
						key={feature.name}
						className="snap-center shadow rounded-xl hover:bg-[--card-bg-60] border-2 border-transparent  hover:border-2 hover:border-green min-w-[20rem] lg:min-w-full h-auto bg-[--card-bg] hover:backdrop-blur-4xl p-0 flex flex-col gap-3"
					>
						<div className="w-full h-full backdrop-blur-none p-6 z-0 flex flex-col gap-2 items-start text-left">
							<CheckCircleIcon className="text-green h-8" />
							<p className="font-semibold text-xl">{feature.name}</p>
							<p className="">
								{feature.description.length > 80 ? `${feature.description.substring(0, 80)}...` : feature.description}
							</p>
							<p className="flex text-green text-sm">
								Read more <ChevronRightIcon className="w-4" />
							</p>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
}
