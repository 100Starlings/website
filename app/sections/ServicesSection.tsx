"use client";

import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const services = [
	{
		name: "Web Development",
		slug: "web-development",
		description:
			"From simple landing pages to complex web applications, we build custom solutions that are tailored to your unique business needs.",
		imageUrl:
			"https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
	},
	{
		name: "Full Project Delivey",
		slug: "full-project-delivery",
		description:
			"You will get a dedicated team to take care of the full product delivery. We design, we code, and we ship your application.",
		imageUrl:
			"https://plus.unsplash.com/premium_photo-1661782562303-b6839db30206?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		name: "App Development",
		slug: "app-development",
		description: "From iOS to Android, we build mobile applications that are tailored to your unique business needs.",
		imageUrl:
			"https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		name: "Team Extension",
		slug: "team-extension",
		description:
			"Gain competitive advantige by leveraging a specialized team tailored to meet your unique business requirements. We provide our best developers, consultants who work as part of your team.",
		imageUrl:
			"https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		name: "MVP for Startups",
		slug: "mvp-for-startups",
		description:
			"Using our startup experience, we design and build your MVP so you can test your business concept with a real product.",
		imageUrl:
			"https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
	},
	{
		name: "Consulting",
		slug: "consulting",
		description:
			"We understand technology and development, enabling your business to focus on its core strengths. Whether it's selecting the right platform, programming language, or enhancing your existing website, our consultants are here to help.",
		imageUrl:
			"https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		name: "DevOps",
		slug: "devops",
		description:
			"Our experts excel in implementing CI/CD, infrastructure as code, and cloud-native practices. We take a holistic approach to software delivery, addressing security, automation, compliance, QA, and more for a comprehensive market-ready solution.",
		imageUrl:
			"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
	},
	{
		name: "UX/UI Design",
		slug: "ux-ui-design",
		description:
			"We help you learn more about your users and explore possible competitors and discover market gaps. We completely design your product. Our design team creates code-ready design, speeding up the technological implementation.",
		imageUrl:
			"https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
	},
];

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
					className="flex gap-6 w-full overflow-x-auto snap-x snap-center snap-mandatory overflow-y-visible"
				>
					{services.map((feature) => (
						<Link
							href={`/services/${feature.slug}`}
							key={feature.name}
							className="snap-center relative card rounded-lg overflow-hidden min-w-[23rem] h-[33rem] bg-black hover:backdrop-blur-4xl p-0 flex flex-col gap-3"
						>
							<Image src={feature.imageUrl} alt="hero" fill style={{ objectFit: "cover", zIndex: "0" }} />
							<div className="w-full h-full backdrop-blur-none bg-gradient-to-b from-black/0 to-black/60 p-6 text-gray-50 absolute z-0 flex items-end rounded-md">
								<p className="font-semibold text-2xl text-white/90 text-center">{feature.name}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
