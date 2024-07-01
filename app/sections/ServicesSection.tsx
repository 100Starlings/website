"use client";

import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import services from "@/data/offeredServices.json";

export default function ServicesSection() {
	//  scroll the services section left and right by 300px when the left and right arrows are clicked
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
		<section id="services" className="w-full flex flex-col gap-6">
			<div className="flex w-full max-w-7xl mx-auto justify-between items-center">
				<p className="header">How can we help you?</p>
				<div className="flex gap-4">
					<button onClick={scrollLeft}>
						<ChevronLeftIcon className="h-6 w-6" />
					</button>
					<button onClick={scrollRight}>
						<ChevronRightIcon className="h-6 w-6" />
					</button>
				</div>
			</div>
			<div className="w-full overflow-x-visible">
				<div
					ref={servicesRef}
					style={{ paddingInline: `max(0rem, calc((100vw - 83.5rem) / 2))` }}
					className="flex gap-4 lg:gap-8 w-full overflow-x-auto snap-x snap-center snap-mandatory overflow-y-visible"
				>
					{services.map((feature) => (
						<Link
							href={`/services/${feature.slug}`}
							key={feature.name}
							className="snap-center relative rounded-xl gallery-photo overflow-hidden min-w-[80vw] lg:min-w-[23rem] h-[33rem] bg-black hover:backdrop-blur-4xl p-0 flex flex-col gap-3"
						>
							<Image
								src={feature.imageUrl}
								alt="hero"
								fill
								style={{ objectFit: "cover", zIndex: "0" }}
								className="image"
							/>
							<div className="w-full h-full backdrop-blur-none bg-gradient-to-b from-black/10 to-black/30 p-6 text-gray-50 absolute z-0 flex items-end">
								<p className="font-semibold text-2xl text-white/100 text-center">{feature.name}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
