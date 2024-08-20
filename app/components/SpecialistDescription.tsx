"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";

interface Specialist {
	id: string;
	first_name: string;
	last_name: string;
	image_url: string;
	description: string;
	calendar: string;
	title: string;
}

interface Service {
	name: string;
}

interface SpecialistDescriptionProps {
	currentSpecialists: Specialist[];
	currentService: Service;
}

const SpecialistDescription: React.FC<SpecialistDescriptionProps> = ({ currentSpecialists, currentService }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + currentSpecialists.length) % currentSpecialists.length);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % currentSpecialists.length);
	};

	const truncateText = (text: string, maxLength: number): string => {
		if (text.length <= maxLength) return text;
		const truncated = text.substr(0, text.lastIndexOf(" ", maxLength));
		return truncated + "...";
	};

	console.log("currentSpecialists", currentSpecialists)
	console.log("currentService", currentService)

	return (
		<div id="specialist-section" className="sm:basis-1/2 sm:ml-6">
			<div id="intro-card" className="relative flex flex-row card mb-4 p-8 sm:px-8 sm:py-20">
				<div id="intro-copy" className="relative z-10 ">
					<h2 className="text-5xl tracking-tight font-semibold mb-6">
						Your business is unique
					</h2>
					<p className="font-light text-md leading-relaxed">
						and that&apos;s why we tailor our approach to meet your specific needs. <br />
						Let&apos;s explore how our collaboration can drive the best results for you.
					</p>
				</div>

				<div id="blur-background" className="absolute z-0 blur-2xl">
					<h2 className="text-4xl tracking-tight text-green font-bold">
						Your business is unique
					</h2>
					<p className="font-light text-2xl text-green leading-loose">
						and thats why we tailor our approach to meet your specific needs. <br />
						Lets explore how our collaboration can drive the best results for you.
					</p>
				</div>
			</div>

			<div id="specialist-card" className="card p-8">
				<a href={`/team/${currentSpecialists[currentIndex]?.first_name}-${currentSpecialists[currentIndex]?.last_name}`}>
					<Image
						src={currentSpecialists[currentIndex]?.image_url || ""}
						className="rounded-full mb-4 min-w-[2rem]"
						alt="Specialist"
						width={80}
						height={80}
					/>
				</a>

				<p className="text-md font-light mb-4">
					Connect with&nbsp;
					<a href={`/team/${currentSpecialists[currentIndex]?.first_name}-${currentSpecialists[currentIndex]?.last_name}`} className="text-green underline underline-offset-2">
						{currentSpecialists[currentIndex]?.first_name} {currentSpecialists[currentIndex]?.last_name}, {currentSpecialists[currentIndex]?.title}
					</a>
					<br /> 
					to discuss the next steps in {currentService.name.toLowerCase()} for your business.
				</p>

				<div id="cta-button-group" className="flex flex-row mt-4">
					<a href={currentSpecialists[currentIndex]?.calendar || "/#contact"} className="button dark mr-3">
						Book a session
					</a>

					<a href={"/#contact"} className="button light">
						Contact us
					</a>
				</div>

				{currentSpecialists.length > 1 && (
					<div id="slide-button-group" className="flex flex-row justify-end mt-4">
						<button onClick={handlePrevious} aria-label="Previous specialist">
							<ArrowLeftCircleIcon className="w-6 h-6 mr-3" />
						</button>
						<button onClick={handleNext} aria-label="Next specialist">
							<ArrowRightCircleIcon className="w-6 h-6" />
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default SpecialistDescription;
