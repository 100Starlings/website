import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
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
	return (
		<section id="#projects" className="w-full flex flex-col gap-6">
			<div className="flex w-full max-w-7xl mx-auto justify-between items-center">
				<p className="header">Client engagements we&apos;re proud of</p>
				<div className="flex gap-4">
					<ArrowLeftIcon className="h-6 w-6" />
					<ArrowRightIcon className="h-6 w-6" />
				</div>
			</div>
			<div className="w-full overflow-x-visible">
				<div
					style={{ paddingInline: `max(0rem, calc((100vw - 83.5rem) / 2))` }}
					className="flex gap-6 w-full overflow-x-auto"
				>
					{projects.map((project) => (
						<Link
							href={project.websiteUrl}
							key={project.name}
							className="relative rounded-lg overflow-hidden min-w-[50rem] h-[33rem] bg-black hover:backdrop-blur-4xl p-0 flex flex-col gap-3"
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
