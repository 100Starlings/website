"use client";

import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
	{
		name: "Yodel",
		websiteUrl: "https://www.yodel.co.uk/",
		imageURL: "/images/projects/yodel-website.png",
		altText: "Image of Yodel's website",
	},
	{
		name: "Learn Amp",
		websiteUrl: "https://learnamp.com/",
		imageURL: "/images/projects/learnamp.png",
		altText: "Image of Learnamp's website",
	},
	{
		name: "Tusker",
		websiteUrl: "https://tuskercars.com/",
		imageURL: "/images/projects/tusker-website.png",
		altText: "Image of Tusker's website",
	},
	{
		name: "XDB CHAIN",
		websiteUrl: "https://xdbchain.com/",
		imageURL: "/images/projects/xdb-chain-web.png",
		altText: "Image of XDB CHAIN's website",
	},
	{
		name: "Bear",
		websiteUrl: "https://bear.app/",
		imageURL: "/images/projects/bear-web.png",
		altText: "Image of Bear's website",
	},
	{
		name: "Yodel App",
		websiteUrl: "https://www.yodel.co.uk/yodel-app",
		imageURL: "/images/projects/yodel-app.png",
		altText: "Image of Yodel's App",
	},
];

export default function ProjectsSection() {
	//  scroll the services section left and right by 300px when the left and right arrows are clicked
	const projectsRef = React.useRef<HTMLDivElement>(null);

	const scrollLeft = () => {
		if (projectsRef.current) {
			projectsRef.current.scrollBy({ left: -780, behavior: "smooth" });
		}
	};
	const scrollRight = () => {
		if (projectsRef.current) {
			projectsRef.current.scrollBy({ left: 780, behavior: "smooth" });
		}
	};
	return (
		<section id="projects" className="w-full flex flex-col gap-6">
			<div className="flex w-full max-w-7xl mx-auto justify-between items-center">
				<p className="header">Client engagements we&apos;re proud of</p>
				<div className="flex gap-4">
					<button aria-label="Scroll left button" onClick={scrollLeft}>
						<ChevronLeftIcon className="h-6 w-6" />
					</button>
					<button aria-label="Scroll right button" onClick={scrollRight}>
						<ChevronRightIcon className="h-6 w-6" />
					</button>
				</div>
			</div>
			<div className="w-full overflow-x-visible">
				<div
					ref={projectsRef}
					style={{ paddingInline: `max(0rem, calc((100vw - 83.5rem) / 2))` }}
					className="flex gap-6 w-full overflow-x-auto snap-x snap-center snap-mandatory overflow-y-visible"
				>
					{projects.map((project) => (
						<Link
							href={project.websiteUrl}
							key={project.name}
							className="relative shadow rounded-lg gallery-photo overflow-hidden min-w-[80vw] lg:min-w-[50rem] h-[33svh] lg:h-[33rem] bg-black hover:backdrop-blur-4xl p-0 flex flex-col gap-3"
						>
							<Image src={project.imageURL} alt="hero" fill style={{ objectFit: "cover", zIndex: "0" }} />
							<div className="w-full h-full backdrop-blur-none bg-gradient-to-b from-black/0 to-black/60 p-6 text-gray-50 absolute z-0 flex items-end rounded-md">
								<p className="font-semibold text-2xl text-white/90 text-center">{project.name}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
