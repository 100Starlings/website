"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import TeamCard from "../components/TeamCard";
import data from "@/data/team.json";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function OurTeamSection() {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [memberId, setMemberId] = useState("");

	const openPopup = (id: React.SetStateAction<string>) => {
		setIsPopupOpen(true);
		setMemberId(id);
		document.body.style.overflow = "hidden";
	};

	const closePopup = () => {
		setIsPopupOpen(false);
		document.body.style.overflow = "auto";
	};

	const activeTeamMembers = data.filter((member) => member.isActive);

	const servicesRef = React.useRef<HTMLDivElement>(null);

	const scrollLeft = () => {
		if (servicesRef.current) {
			servicesRef.current.scrollBy({ left: -256, behavior: "smooth" });
		}
	};
	const scrollRight = () => {
		if (servicesRef.current) {
			servicesRef.current.scrollBy({ left: 256, behavior: "smooth" });
		}
	};

	return (
		<section id="services" className="w-full flex flex-col gap-6">
			<div className="flex w-full max-w-7xl mx-auto justify-between items-center">
				<p className="header">Meet the team</p>
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
					ref={servicesRef}
					style={{ paddingInline: `max(0rem, calc((100vw - 83.5rem) / 2))` }}
					className="flex gap-6 w-full overflow-x-auto snap-x snap-center snap-mandatory overflow-y-visible"
				>
					{activeTeamMembers.map(({ id, first_name, last_name, title, description, image_url }) => (
						<Link href={`/team/${first_name}-${last_name}`} key={id}>
							<TeamCard
								key={id}
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
		</section>
	);
}
