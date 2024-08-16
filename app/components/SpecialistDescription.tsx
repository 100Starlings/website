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

interface SpecialistDescriptionProps {
	currentSpecialists: Specialist[];
}

const SpecialistDescription: React.FC<SpecialistDescriptionProps> = ({ currentSpecialists }) => {
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

	return (
		<div id="specialist-section" className="sm:basis-1/2 p-6 sm:py-24 sm:px-12">
			<div id="intro-copy">
				<p className="header my-4">Your business is unique</p>

				<p className="font-light text-justify my-4">
					and that's why we tailor our approach to meet your specific needs. <br />
					Let's explore how our collaboration can drive the best results for you.
				</p>
			</div>

			<div id="specialist-profile" className="flex flex-row my-6 flex-wrap sm:flex-nowrap items-center">
				<a
					href={`/team/${currentSpecialists[currentIndex]?.first_name}-${currentSpecialists[currentIndex]?.last_name}`}
					className="sm:basis-2/12 ml-1 mr-3 mb-4 sm:mb-0"
				>
					<Image
						src={currentSpecialists[currentIndex]?.image_url || ""}
						className="rounded-full"
						alt="Specialist"
						width={80}
						height={80}
					/>
				</a>

				<div className="sm:basis-9/12">
					<p className="text-md">
						Connect with {currentSpecialists[currentIndex]?.first_name} {currentSpecialists[currentIndex]?.last_name},{" "}
						{currentSpecialists[currentIndex]?.title}
					</p>
					<p className="text-xs text-justify font-light sm:mr-2">
						{truncateText(currentSpecialists[currentIndex]?.description || "", 250)}
						<a
							href={`/team/${currentSpecialists[currentIndex]?.first_name}-${currentSpecialists[currentIndex]?.last_name}`}
							className="text-green ml-1"
						>
							More info ›
						</a>
					</p>
				</div>
			</div>

			<div id="cta-button-group" className="flex flex-row mt-4">
				<a href={currentSpecialists[currentIndex]?.calendar || "/#contact"} className="button dark mr-3">
					Book a session
				</a>

				<a href={"/#contact"} className="button light">
					Contact us
				</a>
			</div>

			{currentSpecialists.length > 1 && (
				<div id="slide-button-group" className="flex flex-row my-5 ml-1 items-center justify-left sm:justify-start">
					<button onClick={handlePrevious} aria-label="Previous specialist">
						<ArrowLeftCircleIcon className="w-6 h-6 text-slate-400 hover:text-slate-500 mr-3" />
					</button>
					<button onClick={handleNext} aria-label="Next specialist">
						<ArrowRightCircleIcon className="w-6 h-6 text-slate-400 hover:text-slate-500" />
					</button>
				</div>
			)}
		</div>
	);
};

export default SpecialistDescription;
